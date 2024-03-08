
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const hbs = require('hbs')
const app = express()
// app.engine();


const errorController = require('./controllers/error')

app.set('view engine', 'hbs')
// app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


app.listen(4000, () => {
    console.log("server start on http://localhost:4000");
});