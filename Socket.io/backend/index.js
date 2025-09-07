const express= require("express")
const { createServer} = require("http")
const app = express()
const cors = require( "cors" )
const mongoose = require("mongoose")
const Chats = require("./Control")
const { Server } = require("socket.io")

mongoose.connect( "mongodb://127.0.0.1:27017/socketkaDB" )
.then( () => console.log("database connected") )
.catch( (err) => console.log(err) )

const server = createServer(app)
const io = new Server( server, {cors:{origin:"*"}} )

io.on( "connection", ( socket ) => {
    console.log( "user connected", socket.id )
    socket.on( "send message", async ( user, msg ) => {
        await Chats.create( {
            user : user,
            msg : msg
        } )
        io.emit( "new message", user, msg )
    } )
    socket.on( "get message", async () => {
        const data = await Chats.find()
        console.log(data)
        socket.emit( "data", data )
    } )
    
} )

server.listen( 5000 , () => console.log("server created at 5000"))