const express=require("express");
const app =express();
require("dotenv").config();

const port=8004;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})