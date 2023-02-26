//<!-- user.js Xiangde Ou 2023.2.26 -->
//The table will only include The
//username, password, email address

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const { create } = require('../controller/business');
let user = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default:'',
            trim:true,
            required:'username is required'
        },
        /*
        passport:
        {
            type: String,
            default:'',
            trim:true,
            required:'password is required'
        },
        */
        email:
        {
            type:String,
            default:'',
            trim:true,
            required:'email address is required'
        },
        displayName:
        {
            type: String,
            default:'',
            trim: true,
            required:'Display Name is required'
        },
        created:
        {
            type:Date,
            default:Date.now
        },
        update:
        {
            type:Date,
            default:Date.now
        }

    },
);

    //configure options for user model
    let options = ({ missingPasswordError: 'wrong/Missing Password' });
    user.plugin(passportLocalMongoose, options);

    module.exports.User = mongoose.model('user', user);

