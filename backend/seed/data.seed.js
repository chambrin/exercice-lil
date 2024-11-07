const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../database/data.sqlite')

// Create tables and insert sample data
db.serialize(() => {
    // Create users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    )`)

    // Create posts table
    db.run(`CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        title TEXT NOT NULL,
        body TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )`)

    // Insert sample users
    db.run(`INSERT INTO users (name, email) VALUES 
        ('John Doe', 'john@example.com'),
        ('Jane Smith', 'jane@example.com')
    `)

    // Insert sample posts
    db.run(`INSERT INTO posts (user_id, title, body) VALUES 
        (1, 'First Post', 'This is the body of the first post'),
        (2, 'Second Post', 'This is the body of the second post')
    `)
})

db.close()