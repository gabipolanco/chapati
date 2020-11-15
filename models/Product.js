const {Schema,model}= require('mongoose')

const productSchema = new Schema({
  picture: String,
  name: String,
  description: String,
  price: String,
})

module.exports= model( 'Product', productSchema)
