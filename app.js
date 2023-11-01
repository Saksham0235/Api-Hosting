// For connecting with backend 
// It is used to connect database
const connectDB=require("./db/connect")
// This connect will return  a promise


const express=require("express")
// It is used for giving protection 
require("dotenv").config();



const app=express();
const Port=process.env.PORT || 5000;


const product_routes=require("./routes/products")


// Defining routes 
app.get("/",(req,res)=>{
    res.send("<h1>We are Live</h1>")
});


// Middleware or to setting up the  router 
// On using /api/products it link it to product_routes page
app.use("/api/products",product_routes)


// Establishing db connection 
const start=async ()=>{
    try{
//   Using env data       
        await connectDB(process.env.MONGODB_URL);
        app.listen(Port,()=>{
          console.log(`${Port} is connected Now`)
        })
    }
    catch(error){
        console.log(error)
    }
}

start();