
import dotenv from 'dotenv'
dotenv.config();
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export async function sendMessage(toPhoneNumber, message) {
    return await client.messages.create({
        body: message,
        to: toPhoneNumber,
        from: "+18774751499"
    })
}