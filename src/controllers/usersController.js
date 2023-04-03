const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');

function getUsers(){
	return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}


const controller = {
    login: (req,res)=>{
        res.render('login');
    },

    register: (req,res)=>{
        return res.render('register');
    },

    allUsers: (req,res)=>{
        const users = getUsers();
		const admin = users.filter((user) => user.admin);
		const costumer = users.filter((user) => !user.admin);
        res.render('users', { admin, costumer });
    },

    detail: (req, res)=>{
        const users = getUsers();
		const { id } = req.params;
		const user = users.find((element) => element.id === +id);
		res.render('userDetail', { user });

    },

    store: (req, res) =>{

		const resultValidation = validationResult(req);

		if(resultValidation.errors.length > 0){
			return res.render('register',{
				errors: resultValidation.mapped(),
				oldData: req.body,
			});
		}
        const users = getUsers();
		var ulimg = new String(); 
		ulimg = "default-user.jpg"
		const newUser = {
			id: users[users.length -1].id +1,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			admin: false,
			avatar: ulimg
		}
		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect('/user');

    },

    edit: (req, res) =>{
        const users = getUsers();
        const user = users.find(element => element.id == req.params.id);
		res.render('edit-user', { userToEdit: user });
    },

    update:(req, res) =>{
        const users = getUsers();
		const userIndex = users.findIndex(element => element.id == req.params.id);
		const boolValue = req.body.adminValue === "true" ? true : false;
		var ulimg = new String(); 
		if (!req.file) {
		ulimg = users[userIndex].avatar
		} else {
			ulimg = req.file.filename
		}
		users[userIndex] = {
			...users[userIndex],
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			admin: boolValue,
			avatar: ulimg,
		};
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect('/user');
    },

    destroy:(req, res)=>{
        const users = getUsers();
        const userIndex = users.findIndex(element => element.id == req.params.id);
		users.splice(userIndex, 1);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect('/user');

    }
}

module.exports = controller;