const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

function getUsers(){
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}


const controller = {

    register: (req,res)=>{
        return res.render('register');
    },

    login: (req,res)=>{
        return res.render('login');
    }

}

module.exports = controller;