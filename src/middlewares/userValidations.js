const { body } = require('express-validator');
const express = require('express');


const validatorCreateForm = [
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),

    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),

    body('email').notEmpty().withMessage('tiene que escribir un email').bail()
    .isEmail().withMessage('Tienes que escribir un formato de email').bail(),
    body('password').notEmpty().withMessage('ingresa una contraseña')

];

module.exports = validatorCreateForm;
