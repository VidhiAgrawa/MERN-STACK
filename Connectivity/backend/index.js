const express = require("express")
const app = express()
const mongoose = require("mongoose")
const homeRouter = require("./Route/Route")

app.use( express.urlencoded({ extended: false }) )
app.use( express.json() )

mongoose.connect("mongodb://127.0.0.1:27017/user_login_db")
.then(() => console.log("Connected"))
.catch( (err) => console.log(err) )

app.use( "/", homeRouter )

app.listen( 5000, () => console.log("PORT : 5000") )