const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    }
})

module.exports = mongoose.model('user',schema);