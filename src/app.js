
const express = require("express");
const path = require("path");
const { body } = require('express-validator');


const app = express();
// const path = require("path");

app.use(express.static(path.join(__dirname,'public')));

/* Template engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Routers */
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users')

app.use(express.urlencoded({ extended: false})); // esto nos permite capturar la informacion que se envia por un formulario via POST (req.body)
app.use(express.json());

const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Levantando un servidor con Express en: http://localhost:${port}`);
});