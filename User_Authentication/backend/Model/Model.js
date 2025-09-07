const mongoose = require("mongoose")

const userData = mongoose.model( "data", new mongoose.Schema({
    username : { type : String },
    password : { type : String }
}) )

module.exports = userData