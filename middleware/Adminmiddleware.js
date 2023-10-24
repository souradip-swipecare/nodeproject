require('dotenv').config();
const jwt = require('jsonwebtoken');
const user = require('../models/user/user');
const secectkey = process.env.JWTKEY;


class Adminmiddleware {
    async jwtusercheck(req, res, next) {
        try {
            if (req.cookies & req.cookies.usertoken) {
                jwt.verify(req.cookies.usertoken, secectkey, (err, data) => {
                    if (!err) {
                        console.log(data)
                        req.user = data
                        next()
                    } else {
                        req.flash('error', "Login Failed pls try again");
                        return res.redirect('/admin/adminlogin');
                    }
                })
            } else {
                req.flash('error', "Login Failed pls try again");
                return res.redirect('/admin/login');
            }
        } catch (err) {
            console.log(err);
            req.flash('error', "Login Failed pls try again");
            return res.redirect('/admin/adminlogin');
        }
    }
    async rolecheck(req, res, next) {
        try {
            let userdetails = await user.findOne({
                _id: req.user.id
            });
            let token = req.user.token
            if (userdetails.sessionotp == token ){
                req.user = userdetails
                next()
            }else{
                req.flash('error', "Login Failed pls try again");
                return res.redirect('/admin/adminlogin');
            }


        } catch (err) {
            console.log(err);
            req.flash('error', "Login Failed pls try again");
            return res.redirect('/admin/adminlogin');
        }
    }
}
module.exports = new Adminmiddleware();