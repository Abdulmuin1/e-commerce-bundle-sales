import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const bundleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    designerEmail: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    availability: { type: Number, required: true }, //percentage of instock products
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    productNames: [
        {
            type: String,
        },
    ],
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
           
            ref: 'Product',
        },
    ],
    designer: {
        type: mongoose.Schema.Types.ObjectId,
       
        ref: 'User',
    },
});

const Bundle = mongoose.model('Bundle', bundleSchema);

export default Bundle;
