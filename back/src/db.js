const sqlite3 = require('sqlite3').verbose();
exports.conn = new sqlite3.Database('base.db')
