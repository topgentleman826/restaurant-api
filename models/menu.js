// models/menu.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    category: String,
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('Menu', menuSchema);
