const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');

const User = require('../models/User');


function getUsers() {
	return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}

const controller = {
	register: (req, res) => {
		return res.render('register');
	},

	login: (req, res) => {
		return res.render('login');
	},

	allUsers: (req, res) => {
		const users = getUsers();
		const admin = users.filter((user) => user.admin);
		const costumer = users.filter((user) => !user.admin);
		res.render('users', { admin, costumer });
	},

	detail: (req, res) => {
		const users = getUsers();
		const { id } = req.params;
		const user = users.find((element) => element.id === +id);
		res.render('profile', { user });

	},

	store: (req, res) => {

		const users = getUsers();
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			const existingUser = users.find(user => user.email === req.body.email);
			if (existingUser) {
				return res.render('register', {
					errors: {
						email: {
							msg: "El email ya se encuentra registrado"
						}
					}, oldData: req.body
				})
			} else {
				var ulimg =req.body.file;
				ulimg = "default-user.jpg"
				const newUser = {
					id: users[users.length - 1].id + 1,
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					password: bcryptjs.hashSync(req.body.password, 10),
					admin: false,
					avatar: ulimg
				}


				users.push(newUser);
				fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
				res.redirect('/user/login');

			}
		} else {
			res.render('register', {
				errors: errors.mapped(),
				oldData: req.body,
			});
		}
	},

	edit: (req, res) => {
		const users = getUsers();
		const user = users.find(element => element.id == req.params.id);
		res.render('edit-user', { userToEdit: user });
	},

	update: (req, res) => {
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

	destroy: (req, res) => {
		const users = getUsers();
		const userIndex = users.findIndex(element => element.id == req.params.id);
		users.splice(userIndex, 1);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect('/user');

	},

	processLogin: (req, res) => {

		const users = getUsers();
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			let userToLogin = users.find((visitor) => visitor.email == req.body.email)

			if (userToLogin) {
				let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
				if (isOkThePassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;

					if(req.body.remember_me){
						res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60})
					}

					return res.redirect('/');
				} else {
					return res.render('login', {
						errors: {
							password: {
								msg: "Contraseña incorrecta"
							}
						}, oldData: req.body
					})

				}
			} else {
				return res.render('login', {
					errors: {
						email: {
							msg: "Usuario no registrado"
						}
					}, oldData: req.body

				})
			}
		} else {
			res.render('login', {
				errors: errors.mapped(),
				oldData: req.body,
			});
		}
	},


profile: (req, res) => {

		return res.render('userProfile', {
			user: req.session.userLogged
		});

	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}

};

	module.exports = controller;