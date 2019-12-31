// const http = require('http');
//
// const server = http.createServer((req, res, next) => {
//     console.log(req.method);
// });
//
// server.listen(3000);

const bodyParser = require('body-parser');
const express = require('express');

const path = require('path');
const staticRoutes = require('./routes/web');

// models
const conference = require('./models/Conference');

// database
const sequelize = require('./utils/database');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded(
    {extended: false}
));

app.use('/', staticRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404 page not found.'
    });
});

sequelize.sync().then(result => {
    // Port number
    app.listen(3000);
}).catch(err => {
    console.log(err);
});