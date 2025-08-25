const mongoose = require("mongoose")

const userSignup = mongoose.model( "signupdetail", new mongoose.Schema( {
    username : { type : String },
    password : { type : String }
} ) )


module.exports = userSignup