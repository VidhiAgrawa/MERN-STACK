const jwt = require( "jsonwebtoken" )
const userData = require("../Model/Model")
const secret_code = "vidhiheyyyyyyyyyy"

const HandleSignupPage = async( req, res ) => {
    try {
        const { username, password } = req.body
        const token = jwt.sign( { username : username }, secret_code )
        await userData.create( {
            username : username, 
            password : password
        } )
        res.json( { token : token } )
        
    } catch (error) {
        console.log(error)
    }
}

const handleLoginPage = async ( req, res ) => {
    try {
        // const { username, password } = req.query
        const { username, password } = req.body
        const user = await userData.findOne( { username, password } )
        if( !user ) throw new Error("User Not Found")

        const token = jwt.sign( { username : username }, secret_code )
        res.json( { token : token } )
        
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    HandleSignupPage,
    handleLoginPage
}