import asyncHandler from 'express-async-handler';
import Bundle from '../models/bundleModel.js';

const getBundles = asyncHandler(async (req, res) => {
    const bundles = await Bundle.find({});
    res.json(bundles);
});

const getBundleById = asyncHandler(async (req, res) => {
    const bundle = await Bundle.findById(req.params.id);

    if (bundle) {
        res.json(bundle);
    } else {
        res.status(404);
        throw new Error('Bundle not found');
    }
});

export { getBundles, getBundleById };
