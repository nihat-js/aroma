const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 8080
const productRouter = require('./routers/product')


app.use(cors())
app.use(express.json())
app.use("/product",productRouter)

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URI,(err)=>{
  if (err) throw err
  console.log('Connected to DB')
})

app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`Server is running on port ${PORT}`)
})
