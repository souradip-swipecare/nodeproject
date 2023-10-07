class Rechargehistory{
 async history (eq,res){
    res.render('users/history/dth',{
        type:"Dth"
    });
 }
}
module.exports =new Rechargehistory();