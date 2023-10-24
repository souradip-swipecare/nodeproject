const admind = require('../../models/admin/Adminlogin');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const secrectkey = process.env.JWTKEY;
const bcencrypt = require('bcryptjs');
const otpgnrt = require('otp-generator');
const helper = require('../../helper/helper');
const { json } = require('body-parser');


class Logincontroller{
    async adminloginget(req,res){
        res.render('admin/login',{
            success:req.flash('success')||"",
            error: req.flash('error')||""
        });
    }
    //ADMINLOGIN
    async adminlogin(req, res) {
        const {mobile,password} = req.body;
      
        if (!_.isEmpty(mobile && password) && mobile.length == 10){
             try{
                 let userdetails = await admind.findOne({
                    mobile : mobile
                 });
                // console.log(userdetails);
                 if (!_.isEmpty(userdetails)){
                    if(bcencrypt.compareSync(password,userdetails.password)){
                        
                        const otp = otpgnrt.generate(16, { digits: true, specialChars: false });
                        
                        let otpup = {
                            sessionotp: otp
                        }
                       // console.log(userdetails);
                        let otpupdate = await admind.findByIdAndUpdate({ _id: userdetails._id }, otpup);
                        if (otpupdate) {
                            const token = jwt.sign({
                                id: userdetails._id,
                                token: otp,
                                // fname:userdetails.fname,
                                // lasname:userdetails.lname
                            }, secrectkey, { expiresIn: "1h" });
                            res.cookie("usertoken", token);
                            //twofactor
                            if (userdetails.twofactor == false) {
                                const otp = otpgnrt.generate(16, { digits: true, specialChars: false });
                                let sub = "Login otp"
                                let helperres = await helper.mail(userdetails.email, sub, otp);
                                if (helperres == true) {
                                    req.flash('success', "Otp sent successfully");
                                    return res.render('admin/twofactorr', {
                                        success: req.flash('success')
                                    });
                                } else {
                                    req.flash('error', 'Something went wrong ');
                                    return res.redirect('/admin/adminlogin');
                                }
                            }
                            //twofac end
                            return res.json("hii",200);
                            req.flash('err','login success');
                            return res.redirect('/admin/dashboard');
                        }else{
                            req.flash('error', 'Server is busy pls login after some time ');
                            return res.redirect('/admin/adminlogin'); 
                        }

                    }else{
                        req.flash('error', 'Wrong passwod ');
                        return res.redirect('/admin/adminlogin'); 
                    }
                     
                 }else{
                     req.flash('error', 'You Are not Admin pls try with your link ');
                     return res.redirect('/admin/adminlogin'); 
                 }
             }catch(err){
                 req.flash('error', 'Something went wrong ');
                 return res.redirect('/admin/adminlogin'); 
             }
        }else{
            req.flash('error','Mobile or passwotd incorrect or mobile should be 10 digit ');
            return res.redirect('/admin/adminlogin');
        }
        
    }

    async dashboard(req, res) {
        res.render('admin/dashboard')
    }
    async apiadd(req, res) {
        res.render('admin/api/apiadd')
    }
    async apilist(req, res) {
        res.render('admin/api/apilist')
    }
    async apilog(req, res) {
        res.render('admin/api/apilog')
    }
    async apiopeator(req, res) {
        res.render('admin/api/apimopcode')
    }
    async useradd(req, res) {
        res.render('admin/user/aduser')
    }
    async userlist(req, res) {
        res.render('admin/user/userlist')
    }
    async operatorlist(req, res) {
        res.render('admin/operator/operatorlist')
    }
    async amountwise(req, res) {
        res.render('admin/operator/amountwiseapi')
    }
    async apiswitch(req, res) {
        res.render('admin/operator/apiswitch')
    }
    async rechchargehis(req, res) {
        res.render('admin/history/mobilehis')
    }
    async dthhis(req, res) {
        res.render('admin/history/dthhis')
    }
    async wallethis(req, res) {
        res.render('admin/history/wallethis')
    }


}
module.exports = new Logincontroller();