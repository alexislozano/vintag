const db = require('../db');

exports.read = function(req, res) {
    db.conn.all('SELECT name, icon FROM categories', function(err, rows) {
        if (err) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.json(rows);
        }
    });
}
