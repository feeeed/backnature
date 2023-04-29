const{model,Schema, Schema:{Types:{ObjectId}}} = require('mongoose')
const schema = new Schema({
    title:{
        type: String,
        default:''
    },
    description:{
        type: String,
        default:''
    },
    mainContent:{
        type:String,
        default:''
    },
    imageURL:{
        type: String,
        default:''
    },
    category:{
        type: ObjectId,
        ref: 'category'
    }
})
module.exports = model('Post',schema)