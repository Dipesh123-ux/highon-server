const mongoose =  require('mongoose');
const { ObjectId } = mongoose.Schema;

const ownerSchema = new mongoose.Schema({
    name : {
        type : 'string',
        required : true
    },
    email : {
        type : 'string',
        required : true
    },
    password : {
        type : 'string',
        required : true
    },
    userId : {
        type : 'string',
        required : true
    },
    location : {
        type : 'string',
    },
     users:[
        {type : ObjectId,ref : 'User'}
    ]
},{timestamp:true})

module.exports = mongoose.model('Owner',ownerSchema);