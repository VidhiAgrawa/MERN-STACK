const mongoose = require("mongoose")

const Chats = mongoose.model( "chats", new mongoose.Schema({
    user : { type : String },
    msg : { type : String }
}) )

module.exports = Chats