import mongoose from 'mongoose';

const bundleCatagorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        bundleNames: [
            {
                type: String,
            },
        ],
        bundles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Bundle',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const BundleCatagory = mongoose.model(
    'BundleCatagory',
    bundleCatagorySchema
);

export default BundleCatagory;
