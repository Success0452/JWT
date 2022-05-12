
class CustomAPIError extends Error {
    constructor(message){
        super(message)
    }
}

// const CustomError = (msg, statusCode) => {
//     CustomApiError(msg, statusCode)
// }

module.exports = CustomAPIError