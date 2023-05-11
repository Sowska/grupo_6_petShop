const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

let db = require("../database/models");

function getUsers() {
	db.Users.findAll()
	.then(function(usuarios){
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
		db.Users.findAll()
		.then(users => {
		const admin = users.filter(user => user.id_role==2);
		const costumer = users.filter(user => user.id_role==1);
		res.render('users', { admin, costumer });
		})
	},

	detail: (req, res) => {
		db.Users.findByPk(req.params.id, {
			
		})
		.then(function(user) {
			res.render('profile', { user });
		})
	},

	store: async (req, res) => {  //Listo el crud en database
		const errors = validationResult(req);
	
		if (errors.isEmpty()) {
			try {
				const existingUser = await db.Users.findOne({
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
					db.Users.create({
						first_name: req.body.firstName,
						last_name: req.body.lastName,
						email: req.body.email,
						password: hashedPassword,
						avatar_url: "default-user.jpg",
						id_role: 1
					});
					
					res.redirect('/user/login');
				}
			} catch (error) {
				console.log(error);
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
		db.Users.findByPk(req.params.id)
		.then(function(user) {
			res.render('edit-user', { userToEdit: user });
		})
	},

	update: (req, res) => {

		let request = db.Users.findAll(req.params.id);





		var ulimg = new String();
		
		var boolValue = req.body.adminValue === "true" ? 2 : 1;

		if (req.file) {
			ulimg = req.file.filename
		} else {
			db.Users.findByPk(req.params.id)
		.then(user =>{
			ulimg = user.avatar_url
		}
			)
		}
		db.Users.update({
			first_name: req.body.firstName,
			last_name: req.body.lastName,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar_url: ulimg,
			id_role: boolValue
		}, {
			where: {
				id: req.params.id
			}
		})

		res.redirect('/');
	},

	destroy: async (req, res) => {
		try {
			const user = await db.Users.findByPk(req.params.id);
			if (!user) {
				return res.status(404).send('Usuario no encontrado');
			}
			await user.destroy();
			return res.redirect('/user');
		} catch (error) {
			return res.status(500).send('Internal server error');
		}
	},

	processLogin: async (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
				var userToLogin = await db.Users.findOne({ where: { email: req.body.email } });
                if (userToLogin) {
					var compare = userToLogin.dataValues.password;
					console.log(userToLogin)
					console.log(req.body.password)
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, compare);
					console.log(isOkThePassword)
                    if (isOkThePassword) {
                        delete userToLogin.password;
                        req.session.userLogged = userToLogin;

                        if (req.body.remember_me) {
                            res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60})
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