import mongoose from 'mongoose';

const productCatagorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        productNames: [
            {
                type: String,
            },
        ],
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const ProductCatagory = mongoose.model('ProductCatagory', productCatagorySchema);

export default ProductCatagory;
