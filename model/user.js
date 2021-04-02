const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv4()
    },
    name:{
        type:String,
        required:true
    },
    
})

module.exports = mongoose.model('User', UserSchema)
