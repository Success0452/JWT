const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('../errors')

const authenticationMiddleware = async(req, res, next) =>{
    const authHeaders = req.headers.authorization

    if(!authHeaders || !authHeaders.startsWith('Bearer ')){
        throw new UnauthenticatedError(`No Token Provided`);
    }

    const token = authHeaders.split(' ')[1]
    console.log(token)
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {username} = decoded
        req.user = {username}
        next()
    } catch (error) {
        throw new UnauthenticatedError(`Token not verified`)
    }
}

module.exports = authenticationMiddleware