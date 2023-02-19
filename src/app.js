const express = require("express");
const path = require("path");

const mainRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);

//app.get("/", (req,res) => res.sendFile(path.resolve(__dirname,"./views/home.html")));

app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname,"./views/login.html")));

app.get("/cart", (req,res) => res.sendFile(path.resolve(__dirname,"./views/cart.html")));

//app.get("/productDetail", (req,res) => res.sendFile(path.resolve(__dirname,"./views/productDetail.html")));

//app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname,"./views/register.html")));


const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Levantando un servidor con Express en: http://localhost:${port}`);
});