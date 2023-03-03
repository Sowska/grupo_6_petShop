const express = require("express");
const path = require("path");

const mainRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);
app.use('/cart', mainRoutes);
<<<<<<< HEAD


//app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname,"./views/login.html")));

app.get("/productDetail", (req,res) => res.sendFile(path.resolve(__dirname,"./views/productDetail.html")));

//app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname,"./views/register.html")));

app.use('/productDetail', mainRoutes);
app.use('/createProduct',mainRoutes);
=======
app.use('/login', mainRoutes);
app.use('/productDetail', mainRoutes);
app.use('/register', mainRoutes);
app.use('/createProduct', mainRoutes)
>>>>>>> 0b75a7642645e7315ea27942cd772e5a71b80d6d

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Levantando un servidor con Express en: http://localhost:${port}`);
});