const express = require('express')
const app = express()
const bodyParser= require('body-parser')

message={"message":"Hello World"}
app.use(express.static(__dirname+"\\views"))


app.use((req,res,next)=>{
    console.log(req.method+" - "+req.path+" - "+req.ip)
    next()
})
app.get("/",(req,res)=>{
    //res.send('Hello Node JS User')
    res.sendFile(__dirname+"\\views\\index.html")
})

app.get("/name",(req,res)=>{
    let name = req.query["firstname"]+" "+req.query["lastname"]
    res.send({"name":name})
})

app.use(bodyParser.urlencoded({extended:false}))
app.post("/name",(req,res)=>{
    let name=req.body.firstname+" "+req.body.lastname
  res.send({name})
})

app.get("/:word/echo",(req,res)=>{
res.send({"echo":req.params.word})
})





app.get("/now",(req,res,next)=>{
    req["time"]=new Date().toString()
    next()
},(req,res)=>{
res.send(req.time)
})

app.get("/json",(req,res)=>{
    let MESSAGE_TYPE="uppercase"
    if (MESSAGE_TYPE==="uppercase")
      res.json({"message":"Hello World".toUpperCase()})
    else res.json(message)
})

app.listen(9000,()=>{
    console.log("Server started at port:9000")
   // console.log(process.env)
})