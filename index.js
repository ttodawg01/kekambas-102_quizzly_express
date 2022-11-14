const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('register', { username: "brians" })
})

app.get('/users', (req, res) => {
    res.send('Users')
})

// Import function to initialize routes
const initRoutes = require('./src/routes');
// Call the initRoutes function with the app
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

