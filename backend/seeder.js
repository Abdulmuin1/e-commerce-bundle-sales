import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import productCatagories from './data/productCatagories.js';
import bundles from './data/bundles.js';
import bundleCatagories from './data/bundleCatagories.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import Bundle from './models/bundleModel.js';
import BundleCatagory from './models/bundleCatagoriesModel.js';
import ProductCatagory from './models/productCatagoriesModel.js';
import connectDB from './config/db.js';

dotenv.config();

await connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        await Bundle.deleteMany();
        await BundleCatagory.deleteMany();
        await ProductCatagory.deleteMany();

        const createdUsers = await User.insertMany(users);

        const providerEmails = products.map((product) => product.providerEmail);
        const providerIdList = providerEmails.map(
            (email) => createdUsers.find((user) => user.email == email)._id
        );
        for (let i = 0; i < products.length; i++) {
            products[i].provider = providerIdList[i];
        }

        const designerEmails = bundles.map((bundle) => bundle.designerEmail);

        const designerIdList = designerEmails.map(
            (email) => createdUsers.find((user) => user.email == email)._id
        );
        for (let i = 0; i < bundles.length; i++) {
            bundles[i].designer = designerIdList[i];
        }

        const createdProducts = await Product.insertMany(products);

        const bundleProductsLists = bundles
            .map((bundle) => bundle.productNames)
            .map((productNames) =>
                productNames.map(
                    (productName) =>
                        createdProducts.find(
                            (product) =>
                                productName ==
                                product.providerEmail + product.tagNumber
                        )._id
                )
            );

        for (let i = 0; i < bundles.length; i++) {
            bundles[i].products = bundleProductsLists[i];
        }

        const productCatagoriesItemsList = productCatagories
            .map((catagory) => catagory.productNames)
            .map((productNames) =>
                productNames.map(
                    (productName) =>
                        createdProducts.find(
                            (product) =>
                                productName ==
                                product.providerEmail + product.tagNumber
                        )._id
                )
            );
       
        for (let i = 0; i < productCatagories.length; i++) {
            productCatagories[i].products = productCatagoriesItemsList[i];
        }

        const createdBundles = await Bundle.insertMany(bundles);

        const CatagoryBundlesList = bundleCatagories
            .map((catagory) => catagory.bundleNames)
            .map((bundleNames) =>
                bundleNames.map(
                    (bundleName) =>
                        createdBundles.find(
                            (bundle) =>
                                bundleName ==
                                bundle.designerEmail + bundle.name
                        )._id
                )
            );

        for (let i = 0; i < bundleCatagories.length; i++) {
            bundleCatagories[i].bundles = CatagoryBundlesList[i];
        }

        await ProductCatagory.insertMany(productCatagories);
        await BundleCatagory.insertMany(bundleCatagories);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        await Bundle.deleteMany();
        await BundleCatagory.deleteMany();
        await ProductCatagory.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
