const router= require('express').Router();
const authmiddleware = require('../middleware/authMiddleware');
const Chat = require('./../models/chat');

router.post('/create-new-chat',  authmiddleware ,async (req, res) => {
    try {
        const chat =new Chat(req.body);
        const savedChat = await chat.save();

        res.status(201).send({
            success: true,
            message: "Chat created successfully",
            chat: savedChat
        });
        
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
});

router.get('/get-all-chats', authmiddleware, async (req, res) => {
    try {
        const allChats = await Chat.find({members:{$in: req.body.userId }});
        
        res.status(200).send({
            message: "Chats fetched successfully",
            success: true,
            data: allChats
        });
        
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;


