 const express = require("express");
 const app = express();
 const port = process.env.PORT || 3000;
 require("./db/conne")
 const path = require("path");
 const mongoose=require("mongoose");
 const bcrypt = require("bcryptjs") ;
const Register = require('./models/register');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//const static_path = path.join(__dirname);
//app.use(express.static())

//-------------------------------------------------------------------------------------------------------------------------------------------
// for GET Employee single data by pass Employee ID

app.get("/registers/:id" , (req , res) =>{
//  res.send(`${req.params.id}`);
   Register.findOne({id : req.params.id})
   .then( result => {
     res.status(200).json({
       employeData : result
     });
   })
   .catch(err => {
     console.log(err);
     res.status(500).json({
       error: err
     })
   })

})

//------------------------------------------------------------------------------------------------------------------------------------------
// for GET LIST of Employee
app.get("/registers" , (req , res) =>{
//  res.send("hello")
  Register.find()
  .then( result => {
    res.status(200).json({
      employeData : result
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
})

//-----------------------------------------------------------------------------------------------------------------------------
// for create new employee
app.post("/registers" , async (req , res) =>{
  try {
    /*
      console.log(`${req.body.phone} and ${req.body.name} and ${req.body.email} and ${req.body.password} `);

     const pass = req.body.password;
      const cpass = req.body.confirmpassword;
      // for password hashing
      const  hashPass = await bcrypt.hash(pass , 10);
      // for password match
      if( pass === cpass){
        console.log('password are  matched');
        */
        const resgiterEmploye = new Register({
          id : req.body.id,
          name : req.body.name,
          email : req.body.email,
          phone : req.body.phone
        //  confirmpassword : hashPass,
          //password  : hashPass
        })
         const registered = await resgiterEmploye.save();
         res.status(201).send(`succefully saved data`)
    /* //for else part if password not matched
      } else {
        res.send("password are not matching");
        console.log('password are not matching');
      }
    */
  } catch (e) {
    res.status(400).send(e);
  }
})

//------------------------------------------------------------------------------------------------------------------------------------------
// for listen port
 app.listen(port , () =>{
   console.log(`server is running ${port}`);
 })
