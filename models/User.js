const {Schema,model}= require('mongoose')
const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  role: {
    type: String,
    enum: ['viajero', 'host']
    }, 
  volunteeringId:{ 
     type: [Schema.Types.ObjectId], 
     ref: 'Volunteering'
    },
  productId: {
    type: [Schema.Types.ObjectId],
    ref:'Product'
  }
}, {
  timestamps: true
})

module.exports= model('User', userSchema)

