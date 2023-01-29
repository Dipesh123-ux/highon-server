const mongoose =  require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
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
    scannedBy:[
        {type : ObjectId,ref : 'Owner'}
    ]
},{timestamp:true})

module.exports = mongoose.model('User',userSchema);