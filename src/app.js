const express = require("express");
const path = require("path");

const mainRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(__dirname,'../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);
app.use('/cart', mainRoutes);
app.use('/login', mainRoutes);
app.use('/productDetail', mainRoutes);
app.use('/register', mainRoutes);
app.use('/createProduct', mainRoutes)

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Levantando un servidor con Express en: http://localhost:${port}`);
});