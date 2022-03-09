const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    description:{
        type:String
    }
})

module.exports = mongoose.model('introduction',schema);