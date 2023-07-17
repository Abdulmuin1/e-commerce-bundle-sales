import express from 'express'
import dotenv from'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import bundleRoutes from './routes/bundleRoutes.js';
import bundleCatagoriesRoutes from './routes/bundleCatagoriesRoutes.js';
import productCatagoriesRoutes from './routes/productCatagoriesRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send('API running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/bundles', bundleRoutes)
app.use('/api/bundleCatagories', bundleCatagoriesRoutes)
app.use('/api/productCatagories', productCatagoriesRoutes);

app.get('/api/config/paypal', (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {console.log('backend running...')})