//unique handler errors for matching client - server
class ApiError extends Error {
    constructor(status,message){
super();
this.status = status
this.message = message
    }
//create different functions for different status-code
    static badRequest(message){          
        return new ApiError(404,message)
    }
    static internal(message){
        return new ApiError(500,message)
    }
//no rules for enter!
    static forbidden(message){
        return new ApiError(403,message)
    }

}

module.exports = ApiError