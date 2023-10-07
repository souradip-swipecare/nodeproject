class Profilecontroller {
    async profile(req, res) {
        res.render('users/profile');
    }
    
    
}
module.exports = new Profilecontroller();