let db = require("../database/models");

function getProducts() {
	db.Product.findAll()
		.then(function (products) {
			return products
		}
		)
}

const controller = {
	// 1.Listado de productos
	allProducts: async (req, res) => {
		let products = await db.Product.findAll();
		res.render('products', { products });
	
	},

    // 2.Formulario de creación de productos
	createForm: async (req, res) => {
		let categories = await db.Category.findAll();
		let materials = await db.Material.findAll();
		let colors = await db.Color.findAll();
		let discounts = await db.Discount.findAll();
		res.render('createProduct', {categories, materials, colors, discounts });
	},

	// 3. Detalle de un producto particular
	detail: (req, res) => {
		const products = getProducts();
		const { id } = req.params;
		const product = products.find((element) => element.id === +id);
		res.render('ProductDetail', { product });
	},
	
	//4. Acción de creación
	create: (req, res) => {
		var ulimg = new String(); 
		if (!req.file) {
		ulimg = "default.jpg"
		} else {
			ulimg = req.file.filename
		}
		db.Product.create({		
			name: req.body.product,
			description: req.body.measure,
			price: req.body.price,
			inStock: true,
			flavor: req.body.flavor,
			fragrance: req.body.fragrance,
			size: req.body.size,
			discount_id: req.body.discount,
			material_id: req.body.material,
			category_id: req.body.categoryValue,
			color_id: req.body.color,
			pet: req.body.pet,
			mainImage: ulimg,
			creator:1,
		}).then( () => {
			res.redirect('/products');
		});
	},

	// 5. Formulario de edición de productos
	edit: (req, res) => {
        const products = getProducts();
		const product = products.find(element => element.id == req.params.id);
		res.render('edit-product', { productToEdit: product });

	},

	// 6.Acción de edición
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