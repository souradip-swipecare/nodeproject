const express = require('express');
const router = express.Router();
const login = require('../contollers/user/logincontroller');
const dashboard = require('../contollers/user/dashboard');
const rechargehistry = require('../contollers/user/Recharge/Hitory');
const recharge = require('../contollers/user/Recharge/Rechargecontroller');
const profile = require('../contollers/user/Profilecontroller');
const setting = require('../contollers/user/Settingcontroller');

//login
router.get('/user/login', login.userlogin);
//sign up 
router.get('/user/signup', login.userregister);
//foget passwrd
router.get('/user/forgetpass', login.forgetpass);
router.post('/user/forgetpass/otp', login.forgetpassotp);
// dashboard
router.get('/user/dashboard', dashboard.dashboard);
//recharge istory
router.get('/user/dth/history', rechargehistry.history);
//recharge 
router.get('/user/dth/rechage', recharge.dthrec);
//mobilerecharge
router.get('/user/mobile/rechage', recharge.mobilerech);
//profile
router.get('/user/profile', profile.profile);
//setting controller
router.get('/user/seeting/profile', setting.profile);
router.get('/user/seeting/changepass', setting.changepassword);
// router.get('/user/dashboard', frontcon.showoperator);










module.exports = router;