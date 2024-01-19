const Registers =require("../models/registers");

const getAllRegisters = async(req,res)=> {
    const rData= await Registers.find({});
    //const myData= await Product.find({name:"iphone"});
    res.status(200).json({rData});
};

const getAllRegistersTesting = async(req,res)=> {
    //const myData= await Product.find({});
    const rData= await Registers.find(req.query); //it basically used for query search instead of all details ...used for filtering, searching and pagination...
    console.log(
        req.query
    );
    res.status(200).json({rData});
};  
module.exports = { getAllRegisters , getAllRegistersTesting };