const path = require('path');

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },

    cart: (req, res) => {
        res.render('cart');
    }
};

module.exports = controller;