const route = require('express').Router();
const Message = require('../models/message');
const Chat = require('../models/chat');
const authMiddleware = require('../middleware/authMiddleware');
const message = require('../models/message');

route.post('/new-message', authMiddleware, async (req, res) => {
    try {
        //store the message in message collection
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();
        
        //update the latest message in chat collection
        // const currentChat= Chat.findById(req.body.chatId);
        // currentChat.latestMessage = savedMessage._id;
        // await currentChat.save();

        // OR

        const currentChat= await Chat.findByIdAndUpdate({ 
              _id : req.body.chatId
            },
            { 
                
                latestMessage: savedMessage._id,
                $inc: { unreadMessagesCount: 1 }
            }
        );
        res.status(201).send({
            message: 'Message sent successfully',
            success: true,
            data: savedMessage,
        });
    } catch (error) {
        res.status(400).send({
            message: 'Server Error',
            success: false,
        });   
    }
});

route.get('/get-all-messages/:chatId',authMiddleware, async(req,res) => {
    try {
        const allMessages = await Message.find({chatId:req.params.chatId}).sort({ createdAt: 1 });
        res.send({
            message: 'Messages fetched successfully',
            success: true,      
            data: allMessages,
        })
    } catch (error) {
        res.status(400).send({
            message: 'Server Error',
            success: false,
        });
    }
});

module.exports = route;