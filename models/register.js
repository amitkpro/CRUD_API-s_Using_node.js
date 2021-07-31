const mongoose = require("mongoose") ;
// employeeSchema

const employeeSchema = new mongoose.Schema({
   id : {
     type : String,
     unique : true,
     required : true
   },
    name : {
        type : String,
        required : true
  },
  phone :{
        type : Number,
        required : true,
        unique :true
},
/*
 password : {
        type : String,
        required : true
 },
 confirmpassword : {
        type : String,
        required : true
 },  */
    email : {
        type : String,
        required : true,
        unique : true
    },

});



// now we need to create collections

const Register = new mongoose.model("Register" , employeeSchema);

module.exports = Register;
