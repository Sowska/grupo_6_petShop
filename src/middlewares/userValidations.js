const { body } = require('express-validator');

module.exports = {

    validatorCreateForm: [
        body('firstName').notEmpty().withMessage('Debes que escribir un nombre')
        .isLength({ min: 2 }).withMessage('minimo tiene que tener 2 caracteres'),
    
        body('lastName').notEmpty().withMessage('Debes que escribir un apellido')
        .isLength({ min: 2 }).withMessage('minimo tiene que tener 2 caracteres'),
    
        body('email').notEmpty().withMessage('Debes que escribir un email').bail()
        .isEmail().withMessage('Debes que escribir un formato de email valido'),
    
        body('password')
        .notEmpty()
        .withMessage('Ingresa una contraseña').bail()
        .isLength({ min: 8 }).withMessage('Debe tener al menos 8').bail()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
    
    
    ],

    login: [
    body('email')
        .notEmpty().withMessage('Ingrese un correo electronico')
        .isEmail().withMessage('Formato de email incorrecto'),
        body('password')
            .notEmpty().withMessage('Ingrese contraseña')
    ]

}

