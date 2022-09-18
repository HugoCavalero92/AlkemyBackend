'use strict'
import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()

const send_mail = (pname) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: MAILUSER,
            pass: MAILPSSWD
        }
    });
    const mail_options = {
        from: MAILUSER,
        to: MAILREC,
        subject: `Welcome ${pname}`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
            <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                    <p  style="color: #fff; text-align:center">
                        <span style="color: #e84393">${pnombre}</span> 
                        at aplication
                    </p>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡A world of services at your disposal!</p>
                </td>
            </tr>
            </table>
        
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Mail sent successfully: ' + info.response);
        }
    });
};
export default send_mail;
