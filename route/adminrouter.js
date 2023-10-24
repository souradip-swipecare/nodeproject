const express = require('express');
const router = express.Router();
const login = require('../contollers/admin/logincontroller');
const api = require('../contollers/admin/Api/Api');

router.get('/admin/adminlogin',login.adminloginget);
router.post('/admin/adminlogin/dashboard', login.adminlogin);
router.post('/admin/apiadad', api.apiadd);
router.get('/admin/dashboard', login.dashboard);
router.get('/admin/apiadd', login.apiadd);
router.get('/admin/apilist', login.apilist);
router.get('/admin/apilog', login.apilog);
router.get('/admin/apiopadd', login.apiopeator);
router.get('/admin/useradd', login.useradd);
router.get('/admin/userlist', login.userlist);
router.get('/admin/operatorlist', login.operatorlist);
router.get('/admin/amountwiseop', login.amountwise);
router.get('/admin/apiswitch', login.apiswitch);
router.get('/admin/mobile/history', login.rechchargehis);
router.get('/admin/dth/history', login.dthhis);
router.get('/admin/wallet/history', login.wallethis);
// router.get('/admin/dashboard', login.dashboard);
// router.get('/admin/dashboard', login.dashboard);

module.exports = router;