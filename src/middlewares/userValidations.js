const { body } = require('express-validator');

module.exports = {

    validatorCreateForm: [
        /* body('firstName').notEmpty().withMessage('Debes que escribir un nombre')
        .isLength({ min: 1 }).withMessage('minimo tiene que tener 3 caracteres'),
    
        body('lastName').notEmpty().withMessage('Debes que escribir un apellido')
        .isLength({ min: 2 }).withMessage('minimo tiene que tener 5 caracteres'),
    
        body('email').notEmpty().withMessage('Debes que escribir un email').bail()
        .isEmail().withMessage('Debes que escribir un formato de email valido'),
    
        body('password').notEmpty().withMessage('Ingresa una contraseña').bail()
        .isLength({ min: 8 }).withMessage('minimo tiene que tener 8 caracteres') */
    
    ],

    login: [
       /*  body('email')
        .notEmpty().withMessage('Ingrese un correo electronico')
        .isEmail().withMessage('Formato de email incorrecto'),
        body('password')
            .notEmpty().withMessage('Ingrese contraseña') */
    ]

}

