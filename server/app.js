const express =require('express');
const app = express();
const authRouter = require('./controller/authController');
const userRouter = require('./controller/userController');
const chatRouter = require('./controller/chatController');

app.use(express.json()); // Middleware to parse JSON bodies


app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/chat',chatRouter);




module.exports = app;