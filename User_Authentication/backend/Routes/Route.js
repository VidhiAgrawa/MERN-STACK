const express = require("express")
const { HandleSignupPage, handleLoginPage } = require("../Controller/Control")
const userRouter = express.Router()

userRouter.post( "/signup", HandleSignupPage )
// userRouter.get( "/login", handleLoginPage )
userRouter.post( "/login", handleLoginPage )

module.exports = {
    userRouter
}