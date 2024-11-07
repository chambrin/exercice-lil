const db = require('../libs/database')

// Get all users
exports.getAllUsers = (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            res.status(500).send('Error querying database')
            return console.error(err.message)
        }
        res.json(rows)
    })
}

// Create a new user
exports.createUser = (req, res) => {
    const { name, email } = req.body
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function(err) {
        if (err) {
            res.status(500).send('Error inserting user')
            return console.error(err.message)
        }
        res.status(201).json({ id: this.lastID, name, email })
    })
}