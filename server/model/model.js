const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
}, { collection: 'userdb' }); // <-- Explicitly set collection name

const Userdb = mongoose.model('Userdb', schema); // Keep model name as 'Userdb'
module.exports = Userdb;