class Settingcontroller {
    async profile(req, res) {
        res.render('users/settingprofile');
    }
    async changepassword(req, res) {
        res.render('users/settingchangepass');
    }

}
module.exports = new Settingcontroller();