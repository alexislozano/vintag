const db = require('../db')

exports.read = function(req, res) {
    let search = req.query.search
    if (!search || typeof search === 'undefined') {
        search = ''
    }
    let category_name = req.query.category_name
    if (!category_name || typeof category_name === 'undefined') {
        category_name = ''
    }
    let stmt;
    if (search.length == 0 && category_name == 0) {
        stmt = db.conn.prepare('SELECT * FROM products LEFT JOIN likes ON products.name = likes.product_name')
    } else if (search.length == 0 && category_name != 0) {
        stmt = db.conn.prepare('SELECT * FROM products LEFT JOIN likes ON products.name = likes.product_name WHERE category_name = ?', category_name)
    } else if (search.length != 0 && category_name == 0) {
        stmt = db.conn.prepare('SELECT * FROM products LEFT JOIN likes ON products.name = likes.product_name WHERE brand LIKE ? OR name LIKE ?', `%${search}%`, `%${search}%`)
    } else {
        stmt = db.conn.prepare('SELECT * FROM products LEFT JOIN likes ON products.name = likes.product_name WHERE category_name = ? AND (brand LIKE ? OR name LIKE ?)', category_name, `%${search}%`, `%${search}%`)
    }
    stmt.all(function(err, rows) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            let hash = {}
            for (row of rows) {
                let like = row.user_name ? {
                    user_name: row.user_name,
                    category_name: row.category_name,
                    product_name: row.product_name
                } : null
                if (!Object.keys(hash).includes(row.name)) {
                    delete row.user_name
                    delete row.category_name
                    delete row.product_name
                    hash[row.name] = row
                    hash[row.name].likes = []
                }
                if (like) {
                    hash[row.name].likes.push(like)
                }
            }
            res.json(Object.values(hash))      
        }
    });
}
