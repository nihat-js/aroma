const express = require('express');
const mongoose = require('mongoose');


const model = mongoose.model('products', new  mongoose.Schema({
  img: { type: String, required: true, },
  category: { type: String, required: true, },
  name: { type: String, required: true, },
  price: { type: Number, required: true, },
  // description: { type: String, },
}))

module.exports = model
