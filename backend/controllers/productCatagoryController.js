import asyncHandler from 'express-async-handler';
import ProductCatagories from '../models/productCatagoriesModel.js';

const getProductCatagories = asyncHandler(async (req, res) => {
    const catagories = await ProductCatagories.find({});
    res.json(catagories);
});

const getProductCatagoryById = asyncHandler(async (req, res) => {
    const requestedCatagory = await ProductCatagories.findById(req.params.id);

    if (requestedCatagory) {
        res.json(requestedCatagory);
    } else {
        res.status(404);
        throw new Error('Product catagory not Found');
    }
});

export { getProductCatagories, getProductCatagoryById };
