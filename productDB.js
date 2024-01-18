//require("dotenv").config();
const connectDB=require("./db/connect");
const Product = require("./models/products");

const ProductJson = require("./products.json");

const start=async()=>{
    try{
        await connectDB();
        await Product.deleteMany(); //only updated values, not any duplicacy or redundant data...
        await Product.create(ProductJson);
        console.log("success");
    }catch(error){
            console.log(error);
    }
};
start();