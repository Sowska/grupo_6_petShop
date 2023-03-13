const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');

function getProductos(){
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const controller = {
    index: (req, res) => {
        res.render('home');
    },
    
    cart: (req, res) => {
        res.render('cart');
    }, 

    createProduct: (req,res)=>{
    res.render('createProduct');
    },

    productDetail: (req,res)=>{
        const {id} = req.params;
        const productos = getProductos()
        const product = productos.find((product) => product.id === +id)

        res.render('productDetail',{product});
    },

    login: (req,res)=>{
        res.render('login');
    },

    register: (req,res)=>{
        res.render('register');
    }
}

module.exports = controller;