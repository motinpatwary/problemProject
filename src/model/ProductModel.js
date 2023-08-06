const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    ProductName: { type: String },
    ProductCode: { type: String },
    Img: { type: String },
    UnitPrice: { type: String },
    Qty: {type: String},
    TotalPrice: {type: String},
    
},
{
    timestamps: true, versionKey: false
})


const ProductModel = mongoose.model('products', dataSchema)
module.exports = ProductModel;