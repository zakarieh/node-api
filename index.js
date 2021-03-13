const express= require("express");
const app = express();
require("./models/dbConfig");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Import controller
const PostsController = require('./routes/postsController');

// Parse All API
app.use(bodyParser.json())

// Middleware 
app.use('/posts', PostsController)


// Error Problem Mongoose
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);



// Server 
app.listen(5000, ()=>{
    console.log("Server runnung at 5000");
})