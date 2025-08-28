const router=require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Ensure this model is defined correctly


router.post('/signup',  async(req, res) => {
    try {
        //1.If the user already exists 
        const user =await User.findOne({ email: req.body.email });
        //2. if user not exist ,send an error response
        if (user) {
            return res.status(400).send({
                message: "User already exists",
                success: false
            })
        }

        //3. encrypt the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;


        //4. If user does not exist ,create a new user
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPassword
        });

        await newUser.save();
        

        res.status(200).send({
            message: "User created successfully",
            success: true
        });
    } catch (error) {
        res.send({
            message:error.message,
            success:false
        });
    }
   
});

router.post('/login', async (req, res) => {
  
    try {
          //1. check if user exists
            const user=await User.findOne({ email: req.body.email }).select("+password");
            if(!user) {
                return res.status(400).send({
                    message: "User does not exist",
                    success: false
                });
            }

          //2.check if the password is correct

            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordValid) {
                return res.status(400).send({
                    message: "Invalid password",
                    success: false
                });
            }
          //3. if user exists and password is correct, assign a JWT
            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
           // res.cookie('token', token, { httpOnly: true, secure: true }); // Set cookie with token
            res.send({
                message: "Login successful",
                success: true,
                token: token // Send the token in the response
            });

    } catch (error) {
        res.send({
            message: error.message,
            success: false
        });
    }
    

    res.send({
        message:"login successful",
        success: true
    })
});

module.exports = router;