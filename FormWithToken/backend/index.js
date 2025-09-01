require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRouter = require("./Routes/Routes")
const PORT = process.env.PORT
const cors = require("cors")
const { verifyNdValidate } = require("./Controller/control")

app.use(cors())
mongoose.connect( "mongodb://127.0.0.1:27017/user_DB" )
.then( () => console.log("database connnected") )
.catch( (err) => console.log(err) )

app.use( express.urlencoded({extended:false}) )
app.use( express.json() )

app.use( "/user", userRouter )
app.get( "/verify", verifyNdValidate )


app.listen( PORT, () => console.log( `Server connnected at ${PORT}` ) )