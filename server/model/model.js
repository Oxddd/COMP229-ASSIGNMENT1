//<!-- model.js Xiangde Ou 2023.2.24 -->
//The table will only include The
//Contact Name, Contact Number and Email Address

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },

    number : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;