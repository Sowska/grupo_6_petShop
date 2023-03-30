const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

function getUsers(){
	return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}


const controller = {

    register: (req,res)=>{
        return res.render('register');
    },

    login: (req,res)=>{
        return res.render('login');
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
		res.render('UserDetail', { user });

    },

    store: (req, res) =>{

        const users = getUsers();
		const newUser = {
			id: users[users.length -1].id +1,
			firstName: req.body.product,
			lastName: req.body.material,
			email: req.body.pet,
			password: req.body.size,
			type: req.body.price,
			avatar: req.file.filename
		}
		users.push(NewUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect('/userDetail');

    },

    edit: (req, res) =>{
        const users = getUsers();
        const user = users.find(element => element.id == req.params.id);
		res.render('edit-user', { userToEdit: user });
    },

    update:(req, res) =>{
        const users = getUsers();
		const userIndex = users.findIndex(element => element.id == req.params.id);
		users[userIndex] = {
			...users[userIndex],
			firstName: req.body.product,
			lastName: req.body.material,
			email: req.body.pet,
			password: req.body.size,
			type: req.body.price,
			avatar: req.file.filename
		};
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect('/userDetail');
    },

    destroy:(req, res)=>{
        const users = getUsers();
        const userIndex = users.findIndex(element => element.id == req.params.id);
		users.splice(userIndex, 1);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect('/');

    }

}

module.exports = controller;