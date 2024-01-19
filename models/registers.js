const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    first_name: {
        type:String,
        required:true,
    },
    last_name: {
        type:String
    },
    email: {
        type:String,
        required:[true,"should be provided "]
    },
    phone: {
        type:Number,
    },
    password: {
        type:String
    },
});

module.exports=mongoose.model('Register',registerSchema);