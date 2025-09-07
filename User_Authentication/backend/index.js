const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const { userRouter } = require("./Routes/Route")

app.use( cors() )
mongoose.connect( "mongodb://127.0.0.1:27017/Autheticationkadatabase" )
.then( () => console.log("database connected") )
.catch( (err) => console.log(err) )

app.use( express.urlencoded( { extended : false } ) )
app.use( express.json() )

app.use( "/user", userRouter )

app.listen( 5000, () => console.log(" Server started at 5000 ") )
