const userSignup = require("../Model/Model")

const handleUserSignUp = async ( req, res ) => {
    const { username, password } = req.body;
    if( !username || !password ) res.send("Body is required")
    const data = await userSignup.create({
        username : username,
        password : password
    })
    if( data )
        res.send( "User Signed Up" )
    else    
        res.send("Some Error Ocuured")
}

const handleUserLogin = async ( req, res ) => {
    const { username, password } = req.query
    if( !username || !password ) res.send("Body is Required")
    const data = await userSignup.findOne( { 
        password:password,
        username:username
    } )
    if( data ) res.send("correct data user logged in")
    else res.send("data not matched")
}

module.exports = {
    handleUserLogin,
    handleUserSignUp
}