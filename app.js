const express = require('express');
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
//const cors = require('cors');
const app = express();
//middlewares
app.use(express.json());
//app.use(cors());

app.use("/books",router);//local host:5000/books

/*app.use('/',(req,res,next)=>{
    res.send("This is our app")
})  */


mongoose
.connect(
    "mongodb+srv://admin:0KHmSJhqDxv2SPme@cluster0.rzmji.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("connected to data base"))

.then(()=>{
    app.listen(3000);
})
.catch((err)=>console.log(err));

//console.log("Hello World");
//0KHmSJhqDxv2SPme
//ctrl  + c clear