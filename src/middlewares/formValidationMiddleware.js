const { body, check, validationResult } = require('express-validator')

const register = [
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
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'),
        check('profile_pic').custom((value, { req }) => {
            if (!req.file) throw new Error("Debes incluir una imagen en formato '.gif', '.jpeg', '.jpg' o '.png'");
            return true;
        }).bail().custom((value, {req}) => {
            let mimetypes = ["image/png", "image/jpg","image/jpeg", "image/gif"]
            if(!mimetypes.includes(req.file.mimetype)) throw new Error("Los formatos validos son png, jpg, jpeg, gif");
            return true;
        })
]

const contact = [
        check('name', 'Debes incluir tu nombre').trim().notEmpty(),
        check('contact-img').custom((value, { req }) => {
            if (!req.file) throw new Error("Debes incluir una imagen en formato '.gif', '.jpeg', '.jpg' o '.png'");
            return true;
        }).bail().custom((value, {req}) => {
            let mimetypes = ["image/png", "image/jpg","image/jpeg", "image/gif"]
            if(!mimetypes.includes(req.file.mimetype)) throw new Error("Los formatos validos son png, jpg, jpeg, gif");
            return true;
        })
    ]

const newProductValidation = [
    check('categoryValue', 'Debes elegir una categoria para el producto').isIn(['1', '2', '3', '4']),
    body('name').notEmpty().withMessage('Ingrese un nombre').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('description').notEmpty().withMessage('Ingrese una descripción').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
    body('price').notEmpty().withMessage('Ingrese un precio'),
    check('new-product-img').custom((value, { req }) => {
        if (!req.file) throw new Error("Debes incluir una imagen en formato '.gif', '.jpeg', '.jpg' o '.png'");
        return true;
    }).bail().custom((value, {req}) => {
        let mimetypes = ["image/png", "image/jpg","image/jpeg", "image/gif"]
        if(!mimetypes.includes(req.file.mimetype)) throw new Error("Los formatos validos son png, jpg, jpeg, gif");
        return true;
    })
    ]

    const result = (req, res, next) => {
        const result = validationResult(req);
        const hasError = !result.isEmpty()
        
        if(hasError){
        console.log("fallo tu validacion")
        }
        next()
        }

    module.exports = { register, contact, result, newProductValidation}
