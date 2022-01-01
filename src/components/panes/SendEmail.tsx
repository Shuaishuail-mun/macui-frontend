import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_L5sdkqRdhzR9jEt97lPTN");

function SendEmail(){
    async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try{
            let result = await emailjs.sendForm('service_grikvzt', 'template_e1zm8x4', event.currentTarget, 'user_L5sdkqRdhzR9jEt97lPTN');
            console.log(result.text);
        } catch (error:any) {
            console.log(error.text);
        }
    }

    return (
        <form onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="from_name" />
            <label>To Name</label>
            <input type="text" name="to_name" />
            <label>To Email</label>
            <input type="email" name="receiver_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}

export default SendEmail;