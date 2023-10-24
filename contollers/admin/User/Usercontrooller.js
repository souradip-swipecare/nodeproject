const bcencrypt = require('bcryptjs');
const otpgnrt = require('otp-generator');
const helper = require('../../../helper/helper');
const User = require('../../../models/user/user');


class Usercontroller{
//user add 
  async useradd(req,res){
      const { email, role, fname, lname, addhar, pan, state, distric, pincode, buisnessname} = req.body
      if(!_.isEmpty(email & role & mobile & fname & lname & addhar & pan & state & distric & pincode & buisnessname )){
          try {
            //user add section

              let otpwal = otpgnrt.generate(6, { digits: true, specialChars: false, upperCaseAlphabets: false, lowerCaseAlphabets: false });
              let pasotp = otpgnrt.generate(8, { digits: true, specialChars: false, upperCaseAlphabets: false, lowerCaseAlphabets: false });
              
              const newUser = new User({
                  fname: fname,
                  lname: lame,
                  email: email,
                  mobile: mobile,
                  password: bcencrypt.hashSync(pasotp, bcrypt.genSaltSync(10)), // You should hash the password before storing it
                  scheme_id: 'your-scheme-id', // Replace with the actual scheme ID
                  details: {
                      addhar: req.body.addhar, // Set the 'addhar' number here
                      pan: req.body.pan, // Set 'pan' or other details as needed
                  },
                  stock: {
                      rt: 0, // Set the 'rt' value here
                      dt: 0  // Set the 'dt' value here
                  },
                  wallet: helper.encryptData(0),
                  walletpin: helper.encryptData(otpwal),
                  role: role, // Assign the 'rt' role
                  adress: req.body.adress,
                  state: req.body.state ,
                  dristic: req.body.distric ,
                  pincode: req.body.pincode ,
                  buisnessname: req.body.buisnessname
                  // Set other user properties as needed
              });
            //save new user 
              newUser.save()
                  .then(user => {
                      let msg = "User Registration successfully. Your id : " + newUser.mobile + " password : " + pasotp + " walletpin : " + otpwal+". Thank You";
                      let send = helper.mail(newUser.email, "Member registration", msg);
                      if (send == true){
                        req.flash('success',"User registration is successfully done");
                          res.redirect('/admin/userlist');
                      }else{
                          req.flash('error', "User registration is successfully done  please forget password");
                          res.redirect('/admin/userlist');
                      }
                      //console.log('User created:', user);

                  })
                  .catch(err => {
                      req.flash('error', "please Try after some time");
                      res.redirect('/admin/userlist');
                      console.error('Error creating user:', err);
                  });
          } catch (errr) {
              req.flash('error', "please Try after some time");
              res.redirect('/admin/userlist');
          }
   }else{
          req.flash('error', "Fields Are missing");
          res.redirect('/admin/userlist');
   }
  }
}

module.exports = new Usercontroller();