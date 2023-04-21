const express = require("express");
const path = require("path");
const cookies = require('cookie-parser');

const session = require ('express-session');


const rememberMiddleware =require('./middlewares/rememberMiddleware');


const app = express();
// const path = require("path");

app.use(express.static(path.join(__dirname,'public')));

/* Template engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Routers */
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users');


app.use(express.urlencoded({ extended: false})); // esto nos permite capturar la informacion que se envia por un formulario via POST (req.body)
app.use(express.json());

app.use(session({secret: 'Secreto!!!',
resave: false,
saveUninitialized: false}));

app.use(cookies());
app.use(rememberMiddleware);

const methodOverride =  require('method-override');
const rememberMiddleware = require("./middlewares/rememberMiddleware");
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Levantando un servidor con Express en: http://localhost:${port}`);
});
