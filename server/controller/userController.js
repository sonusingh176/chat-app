const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/user'); // Ensure this model is defined correctly

//GET Logged In user details
router.get('/get-logged-user',authMiddleware,async (req,res)=>{
    try {
      
        const user = await User.findOne({_id: req.userId});

        res.send({
            message: "User details fetched successfully",
            success: true,
            data: user
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false
        });
        
    }
})


//GET All User Except Logged In user 
router.get('/get-all-user',authMiddleware,async (req,res)=>{
    try {
      
        const alluser = await User.find({_id: {$ne:req.userId}}); //$ne means not equal
        // This will fetch all users except the logged-in user

        res.send({
            message: "Fetch All Users Successfully",
            success: true,
            data: alluser
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false
        });
        
    }
})

module.exports = router;