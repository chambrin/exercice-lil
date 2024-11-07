const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const userController = require('./controller/UserController');
const postController = require('./controller/PostController');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes



// Routing
app.post('/users', userController.createUser);
// TODO : Ajouter une route ici


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});