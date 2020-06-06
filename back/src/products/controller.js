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
        stmt = db.conn.prepare('SELECT * FROM products')
    } else if (search.length == 0 && category_name != 0) {
        stmt = db.conn.prepare('SELECT * FROM products WHERE category_name = ?', category_name)
    } else if (search.length != 0 && category_name == 0) {
        stmt = db.conn.prepare('SELECT * FROM products WHERE brand LIKE ? OR name LIKE ?', `%${search}%`, `%${search}%`)
    } else {
        stmt = db.conn.prepare('SELECT * FROM products WHERE category_name = ? AND (brand LIKE ? OR name LIKE ?)', category_name, `%${search}%`, `%${search}%`)
    }
    stmt.all(function(err, rows) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.json(rows);
        }
    });
}
