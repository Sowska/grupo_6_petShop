const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		var folder = new String();
		if (file.fieldname === "new-product") {
			folder = path.join(__dirname, '../public/images/products');
		} else {
			folder = path.join(__dirname, '../public/images/users');
		}
		cb(null, folder);
	},
	filename: (req, file, cb) => {
		var fileName = new String();
		if (file.fieldname === "new-product") {
			fileName = `${Date.now()}_product${path.extname(file.originalname)}`;
		} else {
			fileName = `${Date.now()}_user${path.extname(file.originalname)}`;
		}
		
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

module.exports = uploadFile;