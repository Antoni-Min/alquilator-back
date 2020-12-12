import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name:String,
    description:String,
    status:Number,
    price:Number,
    pictures:String,
    bookingLength:Number
});

module.exports = mongoose.model("Product", ProductSchema);