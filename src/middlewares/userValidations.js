const { body } = require('express-validator');
const express = require('express');


const validatorCreateForm = [
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre')
    .isLength({ min: 5 }).withMessage('minimo tiene que tener 5 caracteres'),

    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido')
    .isLength({ min: 5 }).withMessage('minimo tiene que tener 5 caracteres'),

    body('email').notEmpty().withMessage('tiene que escribir un email').bail()
    .isEmail().withMessage('Tienes que escribir un formato de email'),

    body('password').notEmpty().withMessage('ingresa una contraseña').bail()
    .isLength({ min: 8 }).withMessage('minimo tiene que tener 8 caracteres')

];

module.exports = validatorCreateForm;
