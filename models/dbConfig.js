const mongoose =  require("mongoose")

const uri = "mongodb://localhost:27017/node-api";

mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology:true},
    (err)=>{
        if(!err) console.log("Database connected !");
        else console.log("Connection error: "+ err);
    }
)
mongoose.connect(uri, { useFindAndModify: false });