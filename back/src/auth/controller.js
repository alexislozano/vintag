const db = require('../db');

exports.signin = function(req, res) {
    let name = req.body.name;
    let password = req.body.password;
    let stmt = db.conn.prepare('SELECT name, profile_pic, bank_number, address, country, gender, night_mode FROM users WHERE name=? AND password=?', name, password);
    stmt.get(function(err, row) {
        if (err) {
            console.log(error);
            res.sendStatus(500);
        } else if (typeof row === 'undefined') {
            res.sendStatus(404);
        } else {
            res.json(row)
        }
    });
}

exports.signup = function(req, res) {
    let name = req.body.name
    let password = req.body.password
    let profile_pic = req.body.profile_pic
    let bank_number = req.body.bank_number
    let address = req.body.address
    let country = req.body.country
    let gender = req.body.gender
    let night_mode = req.body.night_mode
    let stmt = db.conn.prepare('INSERT INTO users (name, password, profile_pic, bank_number, address, country, gender, night_mode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', name, password, profile_pic, bank_number, address, country, gender, night_mode);
    stmt.run(function(err) {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {        
            let stmt = db.conn.prepare('SELECT name, profile_pic, bank_number, address, country, gender, night_mode FROM users WHERE name=? AND password=?', name, password);
            stmt.get(function(err, row) {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else if (typeof row === 'undefined') {
                    res.sendStatus(404);
                } else {
                    res.json(row)
                }
            });
        }
    })
}
