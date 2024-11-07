const db = require('../libs/database')

// Get all posts
exports.getAllPosts = (req, res) => {
    db.all('SELECT * FROM posts', [], (err, rows) => {
        if (err) {
            res.status(500).send('Error querying database')
            return console.error(err.message)
        }
        res.json(rows)
    })
}

// Create a new post
exports.createPost = (req, res) => {
    const { user_id, title, body } = req.body
    db.run('INSERT INTO posts (user_id, title, body) VALUES (?, ?, ?)', [user_id, title, body], function(err) {
        if (err) {
            res.status(500).send('Error inserting post')
            return console.error(err.message)
        }
        res.status(201).json({ id: this.lastID, user_id, title, body })
    })
}