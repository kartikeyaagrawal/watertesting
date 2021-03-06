
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname= "crud_mongodbyo"
const uri = "mongodb://localhost:27017"
const mongoOptions = {useNewUrlParser:true, useUnifiedTopology: true}
const state= {
    db:null

}

const connect = (cb)=>{
    if (state.db){
        cb();
    }
    else{
        MongoClient.connect(uri,mongoOptions,(err,client)=>{
            if (err)
            {
                cb()
            }
            else{
                state.db= client.db(dbname);
                cb()

            }
        })
    }
}

const getPrimaryKey= (_id)=>{
    return ObjectID(_id);

}
const getDB= ()=>{
    return state.db;

}
module.exports= {connect,getPrimaryKey,getDB}
