const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');



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

    login: (req,res)=>{
        res.render('login');
    },

    register: (req,res)=>{
        res.render('register');
    }
}

module.exports = controller;