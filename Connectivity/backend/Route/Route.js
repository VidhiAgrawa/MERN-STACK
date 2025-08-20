const express = require("express")
const userSignup = require("../Model/Model")
const { userinput } = require("../Controller/control")
const homeRouter = express.Router()

homeRouter.post( "/", userinput )

module.exports = homeRouter