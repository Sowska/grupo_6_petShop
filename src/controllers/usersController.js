const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

let db = require("../database/models");

function getUsers() {
	db.User.findAll()
		.then(function (usuarios) {
			return usuarios
		}
		)
}

const controller = {
	register: (req, res) => {
		return res.render('register');
	},

	login: (req, res) => {
		return res.render('login');
	},

	allUsers: (req, res) => {
		db.User.findAll()
			.then(users => {
				let admin = users.filter(user => user.id_role == 1);
				let costumer = users.filter(user => user.id_role == 2);
				res.render('users', { admin, costumer });
			})
	},

	detail: (req, res) => {
		db.User.findByPk(req.params.id, {

		})
			.then(function (user) {
				res.render('profile', { user });
			})
	},

	store: async (req, res) => {  //Listo el crud en database
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			try {
				const existingUser = await db.User.findOne({
					where: {
						email: req.body.email
					}
				});
				if (existingUser) {
					return res.render('register', {
						errors: {
							email: {
								msg: "El email ya se encuentra registrado"
							}
						}, oldData: req.body
					});
				} else {
					const hashedPassword = bcryptjs.hashSync(req.body.password, 10); // Hasheamos la contraseña
					db.User.create({
						first_name: req.body.firstName,
						last_name: req.body.lastName,
						email: req.body.email,
						password: hashedPassword,
						avatar_url: req.file.filename,
						id_role: 2
					});

					res.redirect('/user/login');
				}
			} catch (error) {
				res.render('register', {
					errors: {
						global: {
							msg: "Hubo un error al crear el usuario"
						}
					}, oldData: req.body
				});
			}
		} else {
			res.render('register', {
				errors: errors.mapped(),
				oldData: req.body,
			});
		}
	},

	edit: (req, res) => {
		db.User.findByPk(req.params.id)
			.then(function (user) {
				res.render('edit-user', { userToEdit: user });
			})
	},

	update: async (req, res) => {
		let boolValue = req.body.adminValue == "true" ? 1 : 2;
		let user = await db.User.findByPk(req.params.id)
		let ulimg = user.getDataValue('avatar_url');
		let password = user.getDataValue('password')
		if (req.file) {
			ulimg = req.file.filename
		}
		if(req.body.pswValue =="true"){
			password=bcryptjs.hashSync(req.body.password, 10)
		}
		db.User.update({
			first_name: req.body.firstName,
			last_name: req.body.lastName,
			email: req.body.email,
			password: password,
			avatar_url: ulimg,
			id_role: boolValue
		}, {
			where: {
				id: req.params.id
			}
		}).then(() => {
		res.redirect('/');
		});
	},

	destroy: (req, res) => {
		db.User.destroy({
			where: {
				id: req.params.id
			},
			force: true
		}
		).then(() => {
			res.redirect('/');
		})
		
	},

	processLogin: async (req, res) => {
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			var userToLogin = await db.User.findOne({ where: { email: req.body.email } });
			if (userToLogin) {
				var compare = userToLogin.dataValues.password;
				let isOkThePassword = bcryptjs.compareSync(req.body.password, compare);
				if (isOkThePassword) {
					delete userToLogin.password;
					
					req.session.userLogged = userToLogin;
					res.locals.userLogged = true;

					if (req.body.remember_me) {
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 120 })
					}
					return res.redirect('/');
				} else {
					delete userToLogin;
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
		
		return res.render('profile', {
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