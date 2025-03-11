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

// Getting user by ID

router.get("/:id", async(req, res) => {
    try
    {
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({message: "user not found" })
        res.json(user)
    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
})


//update user

router.put("/:id", async(req,res) => {
    try
    {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!user) return res.status(404).json({message: "User not found"})
        res.json(user)
    }
    catch(err)
    {
        res.status(400).json({error: error.message})
    }
})


module.exports = router;