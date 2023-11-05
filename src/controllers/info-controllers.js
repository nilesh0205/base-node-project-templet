const {StatusCodes}=require('http-status-codes');

const info=(req,res)=>{
    return res.status(StatusCodes.OK).json({
        succsess:true,
        message:'API is live',
        error:{},
        data:{}
    })
    
}
   module.exports={ 
   info 
 }