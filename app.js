const express= require("express");
const app = express();
const connectDB=require("./db/connect");

const PORT=process.env.PORT || 5000;

const products_routes=require("./routes/products");
const registers_routes=require("./routes/registers");

app.get("/",(req,res)=>{
    res.send("Hi i am live");
});

//middleware or to set router
app.use("/api/products",products_routes);
app.use("/api/registers",registers_routes);

const start=async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`${PORT} yes i am running`);
        });
    } catch(error){
        console.log(error);
    }
};

start();