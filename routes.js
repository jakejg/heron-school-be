import express from 'express';
import { sendMessage } from './twilio.js';

const router = express.Router()

router.get('/', (req, res) => {
    res.send("All system go")
})

router.post('/send', async (req, res) => {
    try {
        const {phoneNumber, message} = req.body;
        await sendMessage(phoneNumber, message)
        res.json("Message sent!")
    }
    catch(error) {
        console.log({error})
        res.status(500).json({error: error, message: "Could not send SMS"})
    }


})



export default router;