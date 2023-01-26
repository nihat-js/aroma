const { log } = require('console')
const Product  = require ( '../models/product' )



async function get (req,res) {
  let result = await Product.find({})
  console.log(result)

    if (!result){
        return res.status(404).send('Product not found')
    }
    res.status(200).json(result)
}

async function getById(req,res) {
  if (!req.params.id){
    return res.status(404).send('Not valid id')
  }
    let result = await Product.findById(req.params.id)
    if (!result){
        return res.status(404).send('Product not found')
    }

    res.status(200).send(result)
}

async function add(req,res){
  
  if (!req.body.name || !req.body.category || !req.body.price  || !req.body.img){
    return res.status(400).send("Not valid parameters")
  }

   let newproduct = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    img : req.body.img
  })

    let result = await newproduct.save()

    if (!result){
        return res.status(404).send('Could not add product')
    }

    res.status(201).json(result)

}

async function deleteById(req,res){
  if (req.body.id){
    return res.status(404).send('Not valid id')
  }
    let result = await Product.findByIdAndDelete(req.body.id)
    if (!result){
        return res.status(404).send('Could not delete product')
    }

    res.status(200).send(result)
}

module.exports = {
    get,
    getById,
    deleteById,
    add,
}