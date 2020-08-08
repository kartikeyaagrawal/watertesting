const express= require("express")
const app= express()
const path = require("path")
app.set('views', 'views')
app.set('view engine', 'ejs')
const collection = "todo"


app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

//thsi changes the request to json format to get int reafble 
app.use(express.json({limit: '40mb', extended: true})) 
app.use(express.static(path.join(__dirname,'public')))



const db = require("./db")
// const { table } = require("console")

db.connect((err)=>{
    if (err){
        console.log(err)
        process.exit(1);

    }
    else{
        app.listen(3000,()=>{
            console.log("connected on port 3000")
        })
    }
})
app.get("/hey",(req,res)=>{
    db.getDB().collection(collection).find({}).toArray((err,documents)=>{
        if (err){
            console.log(err)
        }
        else{
            console.log(documents);
            res.json(documents)
        }
    })
   
  
})
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/query",(req,res)=>{
    res.render("query")
})
app.post("/api",(req,res)=>{
   console.log("hey1223")
//    console.log(req.body)
//    var ab =JSON.parse(req.body); 
     db.getDB().collection(collection).insertOne(req.body);
    res.end("worked")
})
let a
app.post("/query",(req,res)=>{
        const query = require("./model/query-creator")
       console.log(req.body)
        a=  query(req.body)
        // a= req.body
    res.end();    
})
let fake= {
    name:"kartik",
    last:"hi",
    age:23
}
app.get("/table",(req,res)=>{
   console.log("you are inside fetch table")
   console.log(a)
    db.getDB().collection(collection).find(a).toArray()
    .then(elements=>{
        console.log("this is element",elements.length)
        // console.log(elements)
        console.log("hi from inside the mongo correct ")
        //  res.sendStatus(303)
        res.render("table",{elements:fake})
      
    })
    .catch(err=>{
        console.log(err)
    })

})

// app.get("/queryy",(req,res)=>{
//     console.log("heyfro m querYY")
//     //res.send("Success")
//     res.render("table.ejs")
// })