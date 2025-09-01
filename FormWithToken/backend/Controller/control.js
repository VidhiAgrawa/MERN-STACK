const userSignup = require("../Model/Model")
const jwt = require( "jsonwebtoken" )
const secret_Code = "heyyyheyyyheyyy_Vimpush"

const handleSignUp = async( req, res ) => {
    const { username, password } = req.body
    const token = jwt.sign( {username: username}, secret_Code )
    await userSignup.create( {
        username : username,
        password : password
    } )
    res.json({ token : token  })
    
}

const handleLoginPage = async ( req, res ) => {
    console.log("fbjgfgfsddhgjj")
}

const verifyNdValidate = ( req, res, next ) => {
    try {
        const token = req.headers.token;
    const validData = jwt.verify( token, secret_Code )
    console.log(token)
    console.log(validData)
    res.send( "true" )

    } catch (error) {
        res.send("false")
    }
    

}
module.exports = {
    handleSignUp,
    handleLoginPage,
    verifyNdValidate
}