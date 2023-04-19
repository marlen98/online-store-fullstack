const ApiError = require('../error/ApiError')
//next - передает следующей функции в цепочке middleware
module.exports = function(err,req,res,next){
 if (err instanceof ApiError){
return res.status(err.status).json({message:err.message})
 }
 return res.status(500).json({message:'Not detected error'})
}