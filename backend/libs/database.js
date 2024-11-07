const sqlite3 = require('sqlite3').verbose()

// Connect to SQLite database
const db = new sqlite3.Database('./database/data.sqlite', (err) => {
    if (err) {
        console.error('Error opening database:', err.message)
    } else {
        console.log('Connected to the SQLite database.')
    }
})

module.exports = db