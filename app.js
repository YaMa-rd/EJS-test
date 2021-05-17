const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine','ejs');

const errorController = require('./controllers/error');

const planeteRoutes = require('./routes/planete');
const adminRoutes = require('./routes/admin');

app.use(planeteRoutes);

app.use('/admin', adminRoutes)

app.get('/', function(req, res) {
    res.render('./pages/index');
});

app.use(errorController.get404);

app.listen(8080);