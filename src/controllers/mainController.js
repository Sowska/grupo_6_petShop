const path = require('path');

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    
    cart: (req, res) => {
        res.render('cart');
    }, 

    createProduct: (req,res)=>{
    res.render('createProduct');
    },

    productDetail: (req,res)=>{
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    },

    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },

    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    }
}

module.exports = controller;