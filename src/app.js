require('dotenv').config();
const express = require("express");
const path = require("path");
const cookies = require('cookie-parser');
const cors = require('cors');
const { sequelize } = require('./database/models');
const morgan = require('morgan'); // para ver las peticiones que me llegan por servidor GET,POST, ETC..

const paymentRoutes = require('./routes/paymen')
/*const { sequelize } = require('./database/models');*/

const session = require('express-session');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const headerButtonsMiddleware = require('./middlewares/headerButtonsMiddleware');




const app = express();
// const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

/* Template engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Routers */
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const productsAPIRoutes = require('./routes/api/products');
const cartRoutes = require('./routes/cart');
const usersAPIRoutes = require('./routes/api/users');

app.use(morgan('dev'));

app.use(cors());
app.use(express.urlencoded({ extended: false })); // esto nos permite capturar la informacion que se envia por un formulario via POST (req.body)
app.use(express.json());
app.use(session({
    secret: 'Secreto!!!',
    resave: false,
    saveUninitialized: false
}));


app.use(cookies());

app.use(userLoggedMiddleware);
app.use(headerButtonsMiddleware);

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/user', userRoutes);
app.use('/pago',paymentRoutes)
app.use('/api', productsAPIRoutes);
app.use('/cart', cartRoutes);
app.use('/api', usersAPIRoutes);

// (async () => {
//     try {
//       await sequelize.sync();
//       console.log('Tablas sincronizadas correctamente');
//     } catch (error) {
//       console.error('Error al sincronizar las tablas:', error);
//     }
//   })();

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Levantando un servidor con Express en: http://localhost:${port}`);
});
