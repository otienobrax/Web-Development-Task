const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory database (array to store user data)
let users = [];

// Serve static files from the 'public' directory
app.use(express.static('public'));

// POST request handler for form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Name and email are required');
    }

    // Simulate saving data to the in-memory database
    const newUser = { name, email };
    users.push(newUser);

    console.log('New user added:', newUser);

    // Send a success response
    res.status(200).send('User data submitted successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
