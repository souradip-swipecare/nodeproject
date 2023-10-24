const apii = require('../../../models/admin/Apimodal');
const otp = require('otp-generator');


class Apiaddcontroller {
    
    //api list 
    async apilist (req,res){
      try{
          let apidetails = await apii.find({ isdeleted: false });
          if(!_.isEmpty(api) && api.length > 0 ){
              res.render('admin/api/apilist',
              {
                 apidetails
              });
          }else{
           return res.jsonp({'txn':"null"});
          }
      }catch(err){
          return res.jsonp({ 'txn': "null" });
      }
    }
    //api add
    async apiadd(req, res) {
        const { apinm, amethod, rtype, svalue, pvalue, fvalue, opvalue, txvalue, aurl, product } = req.body;
        // res.jsonp(req.body);

        if (!_.isEmpty(apinm && amethod && rtype && svalue && pvalue && fvalue && opvalue && txvalue && aurl && product)) {
            let pdt = ""
            if (product == 1) {
                pdt = "prepaid"
            } else if (product == 2) {
                pdt = "postpaid"
            } else if (product == 3) {
                pdt = "dth"
            }
            let id = otp.generate(2, { digits: true, specialChars: false, upperCaseAlphabets: false, lowerCaseAlphabets: false });
            let save_api = await apii.create({
                name: req.body.apinm,
                id: id,
                userid: req.body.auserid,
                apitoken: req.body.atoken,
                status_value: req.body.rstatus,
                api_url: req.body.aurl,
                apibal_url: req.body.aburl,
                success_value: req.body.svalue,
                pending_value: req.body.pvalue,
                failed_value: req.body.fvalue,
                operator_Id_Value: req.body.opvalue,
                order_id_Value: req.body.txvalue,
                api_Format: req.body.rtype,
                product: pdt,
                method: req.body.amethod,
                errorr_value: req.body.ervalue,
                //call back api data
                cerrorr_value: req.body.cervalue,
                cstatus_value: req.body.cstvalue,
                csuccess_value: req.body.csvalue,
                cpending_value: req.body.cpvalue,
                cfailed_value: req.body.cfvalue,
                corder_Id_Value: req.body.ctxnid,
                coperator_Id_Value: req.body.copid,
                capi_Formatc: req.body.cfrmt,
                status: "Active"
            });
            if (!_.isEmpty(save_api) && save_api._id) {
                return res.jsonp({ status: "TXN", message: "api create succesfully" });
            } else {
                res.jsonp({ status: "ERR", message: "api create failed" });
            }
        } else {
            res.jsonp({ status: "ERR", message: "api create failed" }); 
        }
    }


}

 module.exports = new Apiaddcontroller();