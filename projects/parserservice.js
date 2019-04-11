const express = require('express')
const app = express()

app.get("/api/whoami",(req,res)=>{
    console.log(req.ip)
    console.log(req.headers["user-agent"]);
    console.log(req.headers["accept-language"]);
    res.send({
        "ipaddress":req.ip,
        "language":req.headers["user-agent"],
        "software":req.headers["accept-language"]
    });
});



app.listen(9000,()=>{
    console.log("Server started at port:9000")
   // console.log(process.env)
})
 