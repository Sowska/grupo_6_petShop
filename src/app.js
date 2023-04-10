
const express = require("express");
const app = express();
const path = require("path");
const cookies = require('cookie-parser');

const session = require ('express-session');


app.use(express.static(path.join(__dirname,'public')));

/* Template engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Routers */
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users');


app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookies());

app.use(session({secret: 'Secreto!!!',
resave: false,
saveUninitialized: false}));


const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Levantando un servidor con Express en: http://localhost:${port}`);
});
