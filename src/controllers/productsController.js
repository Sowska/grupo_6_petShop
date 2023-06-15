const { lte } = require("semver");
let db = require("../database/models");
const { validationResult } = require('express-validator');

const controller = {
	allProducts: async (req, res) => {
		let products = await db.Product.findAll({ include: [{ association: "discount" }, { association: "kind" }, { association: "category" }, { association: "user" }] });
		res.render('products', { products });

	},

	createForm: async (req, res) => {
		let categories = await db.Category.findAll();
		let materials = await db.Material.findAll();
		let colors = await db.Color.findAll();
		let discounts = await db.Discount.findAll();
		res.render('createProduct', { categories, materials, colors, discounts });
	},

	detail: async (req, res) => {
		let colors = await db.Color.findAll()
		let productColor = await db.ProductColor.findAll({ where: { productId: req.params.id } })
		let product = await db.Product.findByPk(req.params.id, { include: [{ association: "discount" }, { association: "kind" }, { association: "category" }, { association: "user" }] })
		res.render('ProductDetail', { product, productColor, colors });
	},

	create: async (req, res) => {
		const errors = validationResult(req);
		var ulimg = req.file ? req.file.filename : "default.jpg";
		if (!errors.isEmpty()) {
			let categories = await db.Category.findAll();
			let materials = await db.Material.findAll();
			let colors = await db.Color.findAll();
			let discounts = await db.Discount.findAll();
			console.log(req.body);
			res.render('createProduct', { errors: errors.array(), oldData: req.body, categories, materials, colors, discounts });
		} else {
			db.User.findOne({ where: { email: req.session.userLogged.email } }).then((user) => {
				let creatorId = user.getDataValue('id');
				let category = req.body.categoryValue;
				let kind = req.body.material ? req.body.material : null;
				var selectedColors = req.body.color;

				let newProduct = {
					name: req.body.name,
					description: req.body.description,
					price: req.body.price,
					inStock: true,
					pet: req.body.pet,
					mainImage: ulimg,
					discount_id: req.body.discount,
					material_id: kind,
					category_id: category,
					creator: creatorId
				};

				switch (category) {
					case '1':
						newProduct.material_id = req.body.material;
						break;
					case '2':
						newProduct.measure = req.body.measure;
						newProduct.flavor = req.body.flavor;
						break;
					case '3':
						newProduct.measure = req.body.measure;
						newProduct.fragrance = req.body.fragrance;
						break;
					case '4':
						newProduct.material_id = req.body.material;
						newProduct.size = req.body.size;
						break;
				}

				try {
					db.Product.create(newProduct).then((product) => {
						if (selectedColors !== undefined && selectedColors !== null) {
							product.setColors(selectedColors).then(() => {
								res.redirect('/products');
							});
						} else {
							res.redirect('/products');
						}
					});
				} catch (error) {
					console.error('Error al establecer los colores del producto atrapado', error);
					res.redirect('/products');
				}
			});
		}
	},

	edit: (req, res) => {
		let productToEdit = db.Product.findByPk(req.params.id)
		let categories = db.Category.findAll();
		let materials = db.Material.findAll();
		let colors = db.Color.findAll();
		let discounts = db.Discount.findAll();
		let productColor = db.ProductColor.findAll({
			where: {
				productId: req.params.id
			}
		});
		Promise.all([productToEdit, categories, materials, colors, discounts, productColor])
			.then(function ([productToEdit, categories, materials, colors, discounts, productColor]) {
				res.render('edit-product', { productToEdit, categories, materials, colors, discounts, productColor });
			})
	},

	update: (req, res) => {
		var selectedColors = req.body.color ? req.body.color : null;
		db.Product.findByPk(req.params.id).then((product) => {
			var ulimg = req.file ? req.file.filename : product.mainImage;
			try {
				product.update({
					name: req.body.name,
					description: req.body.description,
					price: req.body.price,
					inStock: req.body.stockValue,
					flavor: req.body.flavor,
					fragrance: req.body.fragrance,
					size: req.body.size,
					discount_id: req.body.discount,
					material_id: req.body.material ? req.body.material : null,
					pet: req.body.pet,
					mainImage: ulimg
				}).then((product) => {
					try {
						product.setColors(selectedColors).then(() => {
							if (selectedColors !== undefined && selectedColors !== null) {
								product.setColors(selectedColors).then(() => {
									res.redirect('/products');
								});
							} else {
								res.redirect('/products');
							}
						});
					} catch (error) {
						console.error('Error al establecer los colores del producto atrapado', error);
						res.redirect('/products');
					}
				}); }catch(error){
					console.error('Error al actualizar el product', error);
						res.redirect('/products');
				}
			});
		},

					destroy: (req, res) => {
						db.Product.destroy({
							where: {
								id: req.params.id
							}
						})
						res.redirect('/products');

					}
				};

				module.exports = controller;