var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    count :{
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

});

var orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    giftwrap:Boolean,
    products: [productSchema]

});

var Order = mongoose.model("Order", orderSchema);

module.exports = Order;
