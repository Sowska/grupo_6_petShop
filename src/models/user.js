const fs  = require ('fs');


const User = {
    fileName: 'src/data/users.json',
    
    //obtener todos los usuarios
    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'));
    },

    //genera un id
    generateId: function(){
        const allUsers = this.findAll();
        console.log(allUsers);
        const lastUser = allUsers[allUsers.length - 1].id; // obtengo el ultimo id
        if (lastUser){
            return lastUser + 1;
        }

        return 1;
    },

    //obtener todos los usuarios

    findAll: function(){
        return this.getData();
    },
    
    // obtener usuario por id
    findByPK: function(id){
        const allUsers = this.findAll();
        const userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    //obtener al usuario mediante cualquier campo
    findByField: function(field,text){
        const allUsers = this.findAll();
        const userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData) {
        const allUsers = this.findAll();
        const newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null,2)); //pasar a formato json

        return true;
    },
    delete: function (id){
        const allUsers = this.findAll();
        const finalUser = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUser,null,2));
        return true;
    }
}

module.exports = User;