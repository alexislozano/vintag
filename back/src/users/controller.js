const db = require('../db')

exports.update = function(req, res) {
    let name = req.params.name
    let profile_pic = req.body.profile_pic
    let bank_number = req.body.bank_number
    let address = req.body.address
    let country = req.body.country
    let gender = req.body.gender
    let night_mode = req.body.night_mode
    let stmt = db.conn.prepare(' UPDATE users SET profile_pic = ?, bank_number = ?, address = ?, country = ?, gender = ?, night_mode = ? WHERE name = ?', profile_pic, bank_number, address, country, gender, night_mode, name);
    stmt.run(function(err) {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {        
            let stmt = db.conn.prepare('SELECT name, profile_pic, bank_number, address, country, gender, night_mode FROM users WHERE name=?', name);
            stmt.get(function(err, row) {
                if (err) {
                    console.log(error);
                    res.sendStatus(500);
                } else if (typeof row === 'undefined') {
                    res.sendStatus(404)
                } else {
                    res.json(row)
                }
            });
        }
    })
}
