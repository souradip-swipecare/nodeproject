const express = require('express');
const router = express.Router();
const login = require('../contollers/admin/logincontroller');

router.get('/admin/adminlogin',login.adminlogin);
router.get('/admin/dashboard', login.dashboard);
router.get('/admin/apiadd', login.apiadd);
router.get('/admin/apilist', login.apilist);
router.get('/admin/apilog', login.apilog);
router.get('/admin/apiopadd', login.apiopeator);
router.get('/admin/useradd', login.useradd);
router.get('/admin/userlist', login.userlist);
// router.get('/admin/dashboard', login.dashboard);
// router.get('/admin/dashboard', login.dashboard);

module.exports = router;