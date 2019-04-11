const express = require('express')
const app = express()



app.get("/api/timestamp/",(req,res)=>{
    res.send({
        'unix':new Date().getTime(),
        'utc':new Date().toUTCString()
    });
 });
 
 app.get("/api/timestamp/:timestamp",(req,res)=>{
     // console.log(req.body.timestamp)
      var t = new Date(req.params.timestamp)
      var response = {}
      if (isNaN(t)){
          response.error="Invalid Date";
      } 
      else {
         response.unix= t.getTime(),
         response.utc=t.toUTCString()
      }    // if (timestamp)
     res.send(response);
 
 });

 
app.listen(9000,()=>{
    console.log("Server started at port:9000")
   // console.log(process.env)
})
 