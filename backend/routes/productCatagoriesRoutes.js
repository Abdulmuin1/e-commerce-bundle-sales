import express from 'express';
import { getProductCatagories, getProductCatagoryById } from '../controllers/productCatagoryController.js';

const router = express.Router();

router.route('/').get(getProductCatagories);
router.route('/:id').get(getProductCatagoryById);

export default router;
