const express = require('express');
const router = express.Router()
const productController = require('../controllers/productController')


router.get('/',productController.get)
router.get('/:id',productController.getById)
router.post('/',productController.add)
router.delete('/',productController.deleteById)


module.exports= router 