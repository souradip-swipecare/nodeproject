class Rechargecontroller{
async dthrec (req,res){
    res.render('users/recharge/dth');
}
    async mobilerech(req, res) {
        res.render('users/recharge/mobile');
    }
}
module.exports = new Rechargecontroller();