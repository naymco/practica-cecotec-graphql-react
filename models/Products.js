import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName: String,
    description: String,
    image: String,
    price: Number

});

const productModel = mongoose.model('product', productSchema);

export default productModel;