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
    posts:[
        {
        type: ObjectId,
        ref: 'posts'
    },
    ],
});
module.exports = model('category',schema)