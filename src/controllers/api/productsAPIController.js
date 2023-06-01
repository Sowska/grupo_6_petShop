const path = require('path');
const db = require('../../database/models');
const Products = db.Product;
const { validationResult } = require('express-validator');

const productsAPIController = {
    'list': async (req, res) => {
        const count = await db.Product.count();
        const categories = await db.Category.findAll();

        const countByCategory = {};
        for (const category of categories) {
            const categoryId = category.id;
            const categoryCount = await db.Product.count({ where: { category_id: categoryId } });
            countByCategory[categoryId] = categoryCount;
        }

        const products = await db.Product.findAll({
            attributes: ['id', 'name', 'description'],
            include: [{
                model: db.Category,
                as: 'category',
                attributes: ['name']
            }]
        });

        const productArray = products.map(product => {
            const detailUrl = `/api/products/${product.id}`;
            const categoryName = product.category ? product.category.name : 'N/A';
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                category: categoryName,
                detail: detailUrl
            };
        });

        const result = {
            count: count,
            countByCategory: countByCategory,
            products: productArray
        };

        res.json(result);
    },

    'detail': async (req, res) => {
        const product = await db.Product.findByPk(req.params.id, {
            include: [
                { association: 'kind' },
                { association: 'category' },
                { association: 'discount' },
                { association: 'user' },
                { association: 'product_image' }
            ]
        });

        if (!product) {
            return res.status(404).json({ error: 'El producto no existe' });
        }

        const mainImage = product.mainImage;

        const productColors = await db.ProductColor.findAll({
            where: { productId: req.params.id },
        });

        const colorIds = productColors.map(color => color.colorId);

        const colors = await db.Color.findAll({
            where: { id: colorIds },
            attributes: ['name'],
        });

        const availableColors = colors.map(color => color.name);

        const secondaryImages = product.product_image
            .filter(image => image.productId === req.params.id)
            .map(image => image.url);

        const result = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            inStock: product.inStock,
            measure: product.measure,
            flavor: product.flavor,
            fragrance: product.fragrance,
            size: product.size,
            pet: product.pet,
            mainImage: `/images/products/${mainImage}`,
            secondaryImages: secondaryImages,
            discount: product.discount,
            material: product.kind.name,
            category: product.category.name,
            color: availableColors,
            user: product.user
        };

        res.json(result);
    }
}

module.exports = productsAPIController;