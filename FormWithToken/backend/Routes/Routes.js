const express = require("express")
const { handleSignUp, handleLoginPage } = require("../Controller/control")
const userRouter = express.Router()

userRouter.post( "/signup", handleSignUp )
userRouter.get( "/login", handleLoginPage )

module.exports = userRouter