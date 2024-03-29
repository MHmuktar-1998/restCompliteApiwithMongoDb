const { default: mongoose } = require("mongoose");

 
 const userSchema = mongoose.Schema({
    id:{
        type : String,
        require : true
    },
    name: {
        type: String,
        require: true
    },
    age : {
        type : Number,
        require : true
    },
    createedOn :{
        type: Date,
        default : Date.now
    }
 })

 module.exports = mongoose.model("user", userSchema);