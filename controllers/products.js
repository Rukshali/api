const Product =require("../models/products");

const getAllProducts = async(req,res)=> {
    const myData= await Product.find({});
    //const myData= await Product.find({name:"iphone"});
    res.status(200).json({myData});
};

const getAllProductsTesting = async(req,res)=> {
    //const myData= await Product.find({});
    const myData= await Product.find(req.query); //it basically used for query search instead of all details ...used for filtering, searching and pagination...
    console.log(
        req.query
    );
    res.status(200).json({myData});
};  
module.exports = { getAllProducts , getAllProductsTesting };