
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database');

const hbs = require('hbs')
const app = express()
// app.engine();


const errorController = require('./controllers/error')

const mongoConnect = require('./util/database').mongoConnect;

app.set('view engine', 'hbs')
// app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use((req, res, next) => {
    next();
});



app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);





mongoConnect(() => {
    app.listen(4000);
});



