const express = require("express")
const router = express.Router();
const User = require("../models/User")

//Creating new user

router.post("/", async(req, res) =>{
    try{
        const user = new User(req.body)
        await user.save();
        res.status(201).json(user)
    }catch(err){
        res.status(400).json({err: err.message })
    }
})

// Displaying All users

router.get("/", async(req,res)=> {
        const user = await User.find();
        res.json(user)
})

module.exports = router;