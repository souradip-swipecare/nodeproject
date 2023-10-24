require('dotenv').config();
const jwt = require('jsonwebtoken');
const user = require('../models/user/user');
const secectkey = process.env.JWTKEY;


class Userauth{
    //jwt check
     async jwtusercheck(req,res,next){
        try{
          if(req.cookies & req.cookies.usertoken){
            jwt.verify(req.cookies.usertoken,secectkey,(err,data)=>{
                if(!errr){
                    console.log(data)
                    req.user = data
                    next()
                }else{
                    req.flash('error', "Login Failed pls try again");
                    return res.redirect('/user/login');
                }
            })
          }else{
              req.flash('error', "Login Failed pls try again");
              return res.redirect('/user/login');
          }
        }catch(err){
             console.log(err);
            req.flash('error', "Login Failed pls try again");
            return res.redirect('/user/login');
        }
     }
     //role check
     async  rolecheck(req,res,next){
        try{
            let userdetails = await user.findOne({
                _id:req.user.id
            });
             let token = req.user.token
            if (req.user.role == 'rt' || req.user.role == 'dt' || req.user.role == 'md' && userdetails.sessionotp == token){
               if(userdetails.status == 1 && userdetails.isdeleted == false){
                   req.user = userdetails
                   next()
               }else{
                   req.flash('error', "Account is not Active");
                   return res.redirect('/user/login');
               }
            }else{
                req.flash('error', "Login Failed pls try again OR try with proper login link");
                return res.redirect('/user/login');
            }

        }catch(err){
            console.log(err);
            req.flash('error', "Login Failed pls try again");
            return res.redirect('/admin/login');
        }
     }
}
module.exports=new Userauth();