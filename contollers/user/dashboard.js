class Dashboarduser{
   async dashboard(req,res){
    res.render('users/dashboard',{
        title:"Dashboard",
        companyname:"Swipecare",
    })
   }
}
module.exports = new Dashboarduser();