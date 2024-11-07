const db = require('../libs/database')


// TODO Voir tous les utilisateurs

// Crée un nouvel utilisateur
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