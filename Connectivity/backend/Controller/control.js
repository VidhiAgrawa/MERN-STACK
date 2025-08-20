const userSignup = require("../Model/Model")

const userinput = async ( req, res ) => {
    const { username, password } = req.body;
    await userSignup.create({
        username : username,
        password : password
    })
    res.send( "data sent" )
}

module.exports = {userinput}