const path = require('path');

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
        res.render('productDetail');
    }
}

module.exports = controller;