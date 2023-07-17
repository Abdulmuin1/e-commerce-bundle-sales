import express from 'express';
import { getBundleById, getBundles } from '../controllers/bundleController.js';
import Bundle from '../models/bundleModel.js' 

const router = express.Router();

router.route('/').get(getBundles);
router.route('/:id').get(getBundleById);

// Create a new bundle
router.post('/', async (req, res) => {
    try {
        const {
            name,
            designerEmail,
            description,
            price,
            image,
            category,
            availability,
            productNames,
            products,
        } = req.body;

        const newBundle = {
            name,
            designerEmail,
            description,
            price,
            image,
            category,
            availability,
            productNames,
            products,
        };

        const createdBundle = await Bundle.create(newBundle);

        res.status(201).json(createdBundle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update bundle by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            designerEmail,
            description,
            price,
            image,
            category,
            availability,
            productNames,
            products,
        } = req.body;

        const bundleToUpdate = await Bundle.findById(id);

        if (!bundleToUpdate) {
            return res.status(404).json({ message: 'Bundle not found' });
        }

        bundleToUpdate.name = name;
        bundleToUpdate.designerEmail = designerEmail;
        bundleToUpdate.description = description;
        bundleToUpdate.price = price;
        bundleToUpdate.image = image;
        bundleToUpdate.category = category;
        bundleToUpdate.availability = availability;
        bundleToUpdate.productNames = productNames;
        bundleToUpdate.products = products;

        const updatedBundle = await bundleToUpdate.save();

        res.status(200).json(updatedBundle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const deletedBundle = await Bundle.findOneAndDelete({
            _id: req.params.id,
        });
        if (!deletedBundle) {
            return res.status(404).json({ message: 'Cannot find bundle' });
        }
        res.json({ message: 'Bundle removed', bundle: deletedBundle });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
