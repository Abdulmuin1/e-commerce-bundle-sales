import express from 'express';
import {
    getProductById,
    getProducts,
} from '../controllers/productController.js';
import Product  from '../models/productModel.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// Create a new product
router.post('/', async (req, res) => {
    try {
        const {
            name,
            tagNumber,
            providerEmail,
            image,
            brand,
            category,
            description,
            price,
            countInStock,
        } = req.body;
        const newProduct = new Product({
            name,
            tagNumber,
            providerEmail,
            image,
            brand,
            category,
            description,
            price,
            countInStock,
        });
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a product
router.put('/:id', getProduct, async (req, res) => {
    try {
        const {
            name,
            tagNumber,
            providerEmail,
            image,
            brand,
            category,
            description,
            price,
            countInStock,
        } = req.body;
        res.product.name = name;
        res.product.tagNumber = tagNumber;
        res.product.providerEmail = providerEmail;
        res.product.image = image;
        res.product.brand = brand;
        res.product.category = category;
        res.product.description = description;
        res.product.price = price;
        res.product.countInStock = countInStock;
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({
            _id: req.params.id,
        });
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Cannot find product' });
        }
        res.json({ message: 'Product removed', product: deletedProduct });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to retrieve a specific product by ID
async function getProduct(req, res, next) {
    try {
        const product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find product' });
        }
        res.product = product;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
export default router;
