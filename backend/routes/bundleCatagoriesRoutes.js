import express from 'express';
import { getBundleCatagories, getBundleCatagoriesById } from '../controllers/bundleCatagoryController.js';
import BundleCatagory from "../models/bundleCatagoriesModel.js";

const router = express.Router();

router.route('/').get(getBundleCatagories);
router.route('/:id').get(getBundleCatagoriesById);

// POST /api/categories/:id/bundles
router.post('/:id/bundles', async (req, res) => {
    try {
      const category = await BundleCatagory.findById(req.params.id);
      category.bundles.push(req.body.bundleId);
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

export default router;
