class Logincontroller{
    async adminlogin(req,res){
        res.render('admin/login')
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