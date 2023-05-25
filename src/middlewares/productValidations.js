const { body} = require('express-validator');

module.exports = {
    productCreation: [
        body('name')
            .notEmpty().withMessage('El nombre es requerido'),

        body('description')
            .notEmpty('description').withMessage('La descripción es requerida'),

        body('new-product-img').notEmpty().withMessage('La imagen es requerida').bail()
            .custom((value, { req }) => {

                const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
                const fileExtension = path.extname(req.file.originalname).toLowerCase();

                if (!allowedExtensions.includes(fileExtension)) {
                    throw new Error('Formato de imagen no válido');
                }

                return true;
            })
            .withMessage('Formatos de imagen válidos: JPG, JPEG, PNG, GIF'),

        body('price').notEmpty().withMessage('El precio es requerido'),

        body('pet')
            .isIn(['perro', 'gato'])
            .withMessage('Debes seleccionar una opción de mascota para tu producto')
    ]
};