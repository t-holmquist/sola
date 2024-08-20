'use server'

import { Resend } from 'resend';

// receive formdata and send email with Resend API


type FormData = {
    email: string,
    message: string,
}

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.email;
    const message = formData.message;
    
    try {
        await resend.emails.send({
            from: 'Sola kontaktformular <kontakt@solacph.dk>',
            reply_to: senderEmail,
            to: ['kontakt@solacph.dk'],
            subject: 'Ny besked fra Sola',
            text: message,
        });

        return true;
        
        
    } catch (error) {
        return false;
    }
        
}
 
