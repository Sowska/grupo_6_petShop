const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname,'./public');
app.use (express.static(publicPath));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname,"./views/home.html")));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname,"./views/login.html")));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname,"./views/productCart.html")));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname,"./views/productDetail.html")));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname,"./views/register.html")));


app.listen (3030,() => console.log("servidor http://localhost:3030/ abierto"));