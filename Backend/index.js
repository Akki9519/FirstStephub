const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const connectDB=require('./Config/connectDB')
const cart=require('./Model/cartSchema')
const notification=require('./Model/notificationSchema')
const jwt = require("jsonwebtoken");
const Form = require("./Model/formSchema");

require('dotenv').config();
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const cors=require('cors');
const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

mongoose.set("strictQuery", true);
connectDB();

app.post('/signup',async (req, res) => {
    console.log(req.body);
    const { name, email, password,contact,confirmpassword ,uuid} = req.body;
   
    try {
      const user = await Form.findOne({ contact: contact});
      if (user) {
        // console.log('user already registered!!')
        return res.status(400).json({ message: "User Already registered" }); // Added return statement before res.json
      }
      // Create a new user
      const Form1 = new Form({ name, email, password ,contact,confirmpassword,uuid});
      console.log(Form1,'ggg')
      // Save the user to the database
      await Form1.save();
  
      return res.status(201).json({ message: "User registered successfully" }); // Added return statement before res.json
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while processing your request1" });
    }
  });
app.post('/login', async (req, res) => {
    console.log(req.body, "login information");
    
    const {  password,contact } = req.body;
  
    try {
      // Find user by email
      const form = await Form.findOne({ contact: contact});
  
      if (!form) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Compare the provided password with the hashed password in the database
      if (password === form.password) { // Comparing passwords securely requires hashing - consider using a library like bcrypt
        return res.status(200).json({ message: "Login successfully",data:form,token:'12345678'});
      } else {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      // Generate a JWT token - This code will execute only if the previous if-else block doesn't return
      // const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
      // res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while processing your request" });
    }
  });

  app.patch('/updateuser',async(req,res)=>{
    try {
        const response=form.updateOne({"email":req.body.email},{'$set':req.body});
        return res.status(200).json({"status":"successfully","data":response})
    } catch (error) {
        return res.status(500).json({"status":'failure','message':(error)})
    }
  })


// only for cart

app.post('/cart',async(req,res)=>{
    try {
        const data=await cart.find({"userID":req.body.userID});
        return res.status(200).json({"status":"successfully","data":data})
    } catch (error) {
        return res.status(500).json({"status":'failure','message':(error)})
    } 
})

app.delete('/deletecart/:id',async(req,res)=>{
try {
    const id=req.params.id;
    console.log(id,'id')
    const id1 = mongoose.Types.ObjectId(id);
    const response=await cart.deleteOne({"id":id1})
    const data=await cart.find({"userID":req.body.userID});
    return res.status(200).json({"status":"successfully","data":data})
} catch (error) {
    console.log(error,'error')
    return res.status(500).json({"status":'failure','message':(error)})
}
})
app.post('/addcart',async(req,res)=>{
    try {
        const new_cart=new cart(req.body);
        const response = await new_cart.save();
        return res.status(200).json({"status":"successfully","data":response})
    } catch (error) {
      console.log(error,'error')
        return res.status(500).json({"status":'failure','message':(error)})
    }
})

// only for notification
app.post('/notification',async(req,res) =>{
    try {
        console.log(req.body.userId,'userfId');
        const data=await notification.find({"userID":req.body.userID});
        return res.status(200).json({"status":"successfully","data":data})
    } catch (error) {
        return res.status(500).json({"status":'failure','message':(error)})
    } 
})
app.delete('/deletenotification/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        console.log(id,'id')
        const myObjectId = mongoose.Types.ObjectId(id);
        const response=await notification.deleteOne({"id":myObjectId})
        const data=await notification.find({"userID":req.body.userID});
        return res.status(200).json({"status":"successfully","data":data})
    } catch (error) {
        console.log(error,'error')
        return res.status(500).json({"status":'failure','message':(error)})
    }
})
app.post('/addnotification',async(req,res)=>{
    try {
        const new_notification=new notification(req.body);
        const response = await new_notification.save();
        return res.status(200).json({"status":"successfully","data":response})
    } catch (error) {
        return res.status(500).json({"status":'failure','message':(error)})
    }
})

app.listen(4000,()=>{
    console.log("connected to port");
})


