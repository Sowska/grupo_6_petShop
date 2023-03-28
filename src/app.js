
const express = require("express");
<<<<<<< HEAD
const path = require("path");
const { body } = require('express-validator');

const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/user');

=======
>>>>>>> main
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,'public')));

/* Template engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Routers */
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
<<<<<<< HEAD
app.use('/cart', mainRoutes);

// app.use('/login', userRoutes);

app.use('/productDetail', mainRoutes);

app.use('/user', userRoutes); 

app.use('/createProduct', mainRoutes)

app.use('/products', productsRoutes)
=======
app.use('/products', productsRoutes);
app.use('/user', userRoutes);
>>>>>>> main

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Levantando un servidor con Express en: http://localhost:${port}`);
});