const db = require('../db')

exports.create = function(req, res) {
    let user_name = req.body.user_name
    let product_name = req.body.product_name
    let stmt = db.conn.prepare('INSERT INTO likes (user_name, product_name) VALUES (?, ?)', user_name, product_name);
    stmt.run(function(err) {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            let stmt = db.conn.prepare('SELECT user_name, product_name FROM likes WHERE user_name = ? AND product_name = ?', user_name, product_name)
            stmt.get(function(err, row) {
                if (err) {
                    console.log(err)
                    res.sendStatus(500)
                } else if (typeof row === 'undefined') {
                    res.sendStatus(404);
                } else {
                    res.json(row)
                }
            })
        }
    })
}

exports.delete = function(req, res) {
    let user_name = req.params.user_name
    let product_name = req.params.product_name
    let stmt = db.conn.prepare('DELETE FROM likes WHERE user_name = ? AND product_name = ?', user_name, product_name);
    stmt.run(function(err) {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}
