
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database');
const mongoose = require('mongoose');

const hbs = require('hbs')
const app = express();



const errorController = require('./controllers/error')


app.set('view engine', 'hbs')

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


mongoose
    .connect('mongodb+srv://rokglobaliasoft:D1Ii2FvtnjoKD05M@cluster0.8mtjjdp.mongodb.net/Datadb')
    .then(result => app.listen(3000))
    .catch(
        err => {
            console.log(err);
        })
