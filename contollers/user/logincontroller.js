class Logincontroller {
    async userlogin(req,res){
        res.render('users/login',{
            companyname: "Swipecare",
        })
    }
    async userregister(req, res) {
        res.render('users/signup', {
            companyname: "Swipecare",
            title:"Sign up to SWIPECARE"
        })
    }
    async forgetpass(req, res) {
        res.render('users/forgetpass', {
            companyname: "Swipecare",
            title: "Sign up to SWIPECARE"
        })
    }

    async forgetpassotp(req, res) {
        res.render('users/twofactor', {
            companyname: "Swipecare",
            title: "Sign up to SWIPECARE"
        })
    }
}

module.exports = new Logincontroller();