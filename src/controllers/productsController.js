/* const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

function getProducts(){
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
} //esta funcion permite actualizar la lista de products para cada accion del CRUD.
 */

let db = require("../database/models");

const controller = {
	// 1.Listado de productos
	allProducts: (req, res) => {
		db.Products.findAll()
		.then(function(productos){
			res.render('products', { productos });  
		})
/*         const products = getProducts();
        res.render('products', { products });   */
	
	},

    // 2.Formulario de creación de productos
	create: (req, res) => {
		res.render('createProduct');
	},

	// 3. Detalle de un producto particular
	detail: (req, res) => {
		const products = getProducts();
		const { id } = req.params;
		const product = products.find((element) => element.id === +id);
		res.render('ProductDetail', { product });
	},
	
	//4. Acción de creación (se usara en products.js con POST)
	store: (req, res) => {
		db.Products.create({
			name: req.body.product,
			material: req.body.material,
			pet: req.body.pet,
			size: req.body.size,
			price: req.body.price,
			image: ulimg
		});
		res.redirect('/products');
        /* const products = getProducts();
		var ulimg = new String(); 
		if (!req.file) {
		ulimg = "default.jpg"
		} else {
			ulimg = req.file.filename
		}
		const newProduct = {
			id: products[products.length -1].id +1,
			product: req.body.product,
			material: req.body.material,
			pet: req.body.pet,
			size: req.body.size,
			price: req.body.price,
			image: ulimg
		}
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products'); */

	},

	// 5. Formulario de edición de productos
	edit: (req, res) => {
        const products = getProducts();
		const product = products.find(element => element.id == req.params.id);
		res.render('edit-product', { productToEdit: product });

	},

	// 6.Acción de edición (se usara en products.js con PUT):
	update: (req, res) => {

        const products = getProducts();
		const productIndex = products.findIndex(element => element.id == req.params.id);
		var ulimg = new String(); 
		if (!req.file) {
		ulimg = products[productIndex].image
		} else {
			ulimg = req.file.filename
		}
		products[productIndex] = {
			...products[productIndex], //express operator: como el id de ese producto no sera sobreescrito, mantiene esos valores, sobreescribe los campos especificos.
			product: req.body.product,
			material: req.body.material,
			pet: req.body.pet,
			size: req.body.size,
			price: req.body.price, 
			image: ulimg

		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
		
	},

	// 7.Accion de borrado
	destroy : (req, res) => {
        const products = getProducts();
		const productIndex = products.findIndex(element => element.id == req.params.id);
		products.splice(productIndex, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');

	}
};

module.exports = controller;