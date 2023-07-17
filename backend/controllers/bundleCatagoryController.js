import asyncHandler from 'express-async-handler';
import BundleCatagories from '../models/bundleCatagoriesModel.js';

const getBundleCatagories = asyncHandler(async (req, res) => {
    const catagories = await BundleCatagories.find({});
    res.json(catagories);
});

const getBundleCatagoriesById = asyncHandler(async (req, res) => {
    const requestedCatagory = await BundleCatagories.findById(req.params.id);

    if (requestedCatagory) {
        res.json(requestedCatagory);
    } else {
        res.status(404);
        throw new Error('Bundle catagory not Found');
    }
});

export { getBundleCatagories, getBundleCatagoriesById };
