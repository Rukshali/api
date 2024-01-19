const connectDB=require("./db/connect");
const Register = require("./models/registers");

const RegistersJson = require("./registers.json");

const start=async()=>{
    try{
        await connectDB();
        await Register.deleteMany(); //only updated values, not any duplicacy or redundant data...
        await Register.create(RegistersJson);
        console.log("success");
    }catch(error){
            console.log(error);
    }
};
start();