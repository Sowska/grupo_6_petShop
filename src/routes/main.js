const express = require('express');

const mainController = require('../controllers/mainController');

const {contact, result} = require('../middlewares/formValidationMiddleware')

const uploadFile = require('../middlewares/multer');

const router = express.Router();

router.get('/', mainController.index);
router.get('/cart', mainController.cart);
router.get('/aboutUs', mainController.aboutUs);
router.get('/contact', mainController.contact);
router.post('/processContactForm', uploadFile.single("contact-img"), contact, result, mainController.processContactForm);



module.exports = router;