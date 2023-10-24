const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const encryptionKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const axios = require('axios');
const mail = require('nodemailer');
require('dotenv').config();


class Helper{
    //encryptions
    async encryptData(data) {
        const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey), Buffer.from(iv));
        let encrypted = cipher.update(data, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }
    //decyption
    async decryptData(encryptedData) {
        const decipher = crypto.createDecipheriv(algorithm, Buffer.from(encryptionKey), Buffer.from(iv));
        let decrypted = decipher.update(encryptedData, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    //get recharge commision 
     async getRechargecommision(opid,amount,rechid){
        

     }
    //get aeps commision 

    //get dmt commision 

    //get bbps commmision 

    //get microatm commision 

    //get pan commision

    // get api commision 

    async getApicommision(product){

    }

    //get apidmt commision

    async getApidmtcommision(amount1,amount2){

    }

    //getapibbps commision 
    async getApibbpscommision(amount1, amount2) {

    }
    //mailer node js 
    async mail(mailid,subject,msg){
        try{
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.GMAIL, // Your Gmail email address
                    pass: process.env.GPASSWORD       // Your Gmail password
                }
            });
            const mailOptions = {
                from: process.env.GMAIL,
                to: mailid,
                subject: subject,
                text: msg
            };

            // Send the email
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log('Error:', error);
                    return false;
                } else {
                    console.log('Email sent:', info.response);
                    return true;
                }
            });
        }catch(err){
            return false
        }
        
    }




}
module.exports = new Helper();