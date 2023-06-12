const fs = require('fs');
const path = require('path');
const messagesFilePath = path.join(__dirname, '../database/contactMessages.json');

function getMessages(){
	return JSON.parse(fs.readFileSync(messagesFilePath, 'utf-8'));
}


const { validationResult } = require('express-validator');

const controller = {
    index: (req, res) => {
        res.render('home');
    },
    contact: (req, res) => {
        res.render('contact');
    },

    processContactForm: (req,res) => {
        const messages = getMessages();
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.log(errors)
            console.log(req.file);
            return res.render('contact', {
                errors: errors.array(), oldData: req.body
            })
        
        } else{
            const newMessage = {
                name:req.body.name,
                img:req.file.filename,
            }
            messages.push(newMessage);
            fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2))
            res.redirect('/');
        }
    }
}

module.exports = controller;