const express = require("express")
const { handleUserLogin, handleUserSignUp } = require("../Controller/control")
const userRouter = express.Router()

userRouter.get( "/login", handleUserLogin )
userRouter.post( "/signup", handleUserSignUp )

module.exports = {userRouter}