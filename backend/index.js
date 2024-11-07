const express = require('express')
const bodyParser = require('body-parser')
const userController = require('./controller/UserController')
const postController = require('./controller/PostController')
const app = express()
const port = 8000

app.use(bodyParser.json())

app.get('/users', userController.getAllUsers)
app.post('/users', userController.createUser)
app.get('/posts', postController.getAllPosts)
app.post('/posts', postController.createPost)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})