const express=require('express');

const {serverConfig , logger}=require("./config");
const apiRoutes=require('./routes');


const app=express();

app.use('./api',apiRoutes);
app.listen(serverConfig.PORT,()=>{
    console.log(`SuccessFully started server on PORT: ${serverConfig.PORT}`);
    logger.info("Successfully started a server",{}); 
});