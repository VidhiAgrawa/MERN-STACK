const mongoose = require("mongoose")

const userSignup = mongoose.model( "userDetails", new mongoose.Schema( {
    username : { type : String },
    password : { type : String }
} ) )

module.exports = userSignup