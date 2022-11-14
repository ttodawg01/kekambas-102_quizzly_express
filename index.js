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

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

