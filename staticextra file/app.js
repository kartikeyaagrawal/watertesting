const express = require("express")
const app = express();
const mongodb =require("mongodb");
let ObjectId = mongodb.ObjectId;
const path = require('path'); 
const dotenv= require("dotenv")
dotenv.config()
process.env.CONNECTIONSTRING
// const { Server } = require("http");

let db 
let port = process.env.PORT
if (port==null||port=="")
{
    port= 3000
}


mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  db = client.db()
  app.listen(port,function(){
      console.log("SERVER STRARTED AT 3000")
  })
})

app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

//thsi changes the request to json format to get int reafble 
app.use(express.json({limit: '40mb', extended: true}))            

// app.use('/post/:id', express.static(path.join(__dirname + "public")));
app.use(express.static(path.join(__dirname,'public')))
app.set('views', 'views')
app.set('view engine', 'ejs')
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.get("/",(req,res)=>{
    
    db.collection('blogs').find().toArray(function(err, items) {
        // console.log(items)
        // console.log(JSON.stringify(items))
        res.render("index",{serverdata:items})
    })
    
});
// app.get("/getalldata",(req,res)=>{
//     var g =db.collection('blogs').find().toArray();
//     console.log(g);
//     res.end()
// })
app.get("/post/:id",(req,res)=>{
    // console.log(req.param)
    var blogid = req.params.id;
    // console.log(blogid)
    
    db.collection('blogs').findOne({"_id": ObjectId(blogid)}, function(err, t) {
        // console.log(err)
       
        // console.log(t.data);
        res.render("post",{doc:t})
      });   
    
});
app.get("/download/adddownload",(req,res)=>{
    
    res.render("adddownload")

})
app.get("/download/:id",(req,res)=>{
    // console.log(req.param)
    var blogid = req.params.id;
    // console.log(blogid)
    
    db.collection('download').findOne({"_id": ObjectId(blogid)}, function(err, t) {
        // console.log(err)
       
        // console.log(t.data);
        res.render("post",{doc:t})
      });   
    
});
app.get("/addblog",(req,res)=>{
    res.render("new")

})
app.get("/about",(req,res)=>{
    res.render("about")

})
app.get("/contact",(req,res)=>{
    res.render("contact")

})

app.get("/download",(req,res)=>{
    db.collection('download').find().toArray(function(err, items) {
        // console.log(items)
        // console.log(JSON.stringify(items))
        res.render("download",{serverdata:items})
    })

})





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.post("/api",(req,res)=>{
    // var dataing= JSON.stringify(req.body)
    var dataing=req.body
    // console.log(dataing)

         console.log(req.body.pass,process.env.SIRPASSWORD,req.body.email,process.env.SIREMAIL)
        // res.send({"message":"post done"})
        let a = req.body.pass==process.env.SIRPASSWORD
        let b = req.body.email==process.env.SIREMAIL
        console.log(a,b)
    if (!(a&&b)){
         console.log("if")
        res.status(404).end();
    }
    
    // var banana=req.body.kick;
//    console.log(banana);
//    console.log(JSON.parse(apple));
   else{
        console.log("else")
    //    var fs = require('fs');
    //    fs.writeFile('mynewfile1.json', data, (err) => {
    //        if (err) throw err;
    //        console.log('Data written to file');
    //    });
    // console.log(dataing.data,dataing.date,dataing.name)
    db.collection('blogs').insertOne({name:dataing.name,smallt:dataing.smalltext,date:dataing.date,data:dataing.data}, function(err, info) {
        res.setHeader('Content-Type', 'application/json',)
        res.json(info.ops[0])
      })
    
    // res.end()
   }


})
app.post("/apidownload",(req,res)=>{
    // var dataing= JSON.stringify(req.body)
    var dataing=req.body
    // console.log(dataing)
    
    

    let a = req.body.pass==process.env.SIRPASSWORD
        let b = req.body.email==process.env.SIREMAIL
        console.log(a,b)
    if (!(a&&b)){
        // console.log("if")
        res.status(404).end();
    }
    
    
   else{
        
    db.collection('download').insertOne({name:dataing.name,date:dataing.date,data:dataing.data}, function(err, info) {
        res.setHeader('Content-Type', 'application/json',)
        res.json(info.ops[0])
      })
      
    
    // res.end()
   }


})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



