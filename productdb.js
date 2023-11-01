require("dotenv").config();
const connectDB=require("./db/connect")

const Product=require('./models/mproduct')
// Getting Api data from json file 
const ProductJson=require("./products.json")


const start=async()=>{
    try{
//    Creating a connection      
        await connectDB(process.env.MONGODB_URL)
//  This deletemany will delete the previous and return us the updated and it will add it to db       
       await Product.deleteMany(); 
        await Product.create(ProductJson)
        console.log("Success")
    }
    catch(err){
        console.log(err);
    }
}


start();