const mongose = require('mongoose');
const default_value = "null";
const updatestatus = [0,1];
const type = ["prepaid", "postpaid", "dth", "electricity", "aeps", "payout", "pan"];
const formatvalu = ["CREDIT", "DEBIT"];
const statusval = [0,1,2,3];
// 0 == failed 1 success 2 pending 3 refunded
const wallettype = ["main", "aeps", "matm"];
// 0 == failed 1 success 2 pending 3 refunded

const Reportmodel = mongose.Schema({
    name: { type: String, default: default_value },
    userid: { type: String, default: default_value },
    parentid: { type: String, default: default_value },
    number: { type: String, required: true },
    amount: { type: String},
    //for commision api 
    commmision: { type: String, default: default_value },
    admin_commision: { type: String, default: default_value },
    charges: { type: String, default: default_value },
    admin_charge: { type: String, default: default_value },
    apiid: { type: String, default: default_value },
    //operator 
    opid: { type: String, default: default_value },
    opimage: { type: String, default: default_value },
    //product api
    fundtype: { type: String, enum: formatvalu, required: true },
    txntype: { type: String, enum: type, required: true },
    aepstype: { type: String },
    aepstype: { type: String,required:true,default:"main",enum:wallettype },
    //opid update
    refno: { type: String, required: true, default: default_value },
    txnidvalue: { type: String, default: default_value },
    opidvalue: { type: String, default: default_value },
    //status update
    status: { type: Number, required: true,enum:statusval,default:2},
    updatestatus: { type: String, default:0,enum: updatestatus },
    opbal: { type: String, default: default_value },
    clobal: { type: String, default: default_value },
    // created: { type: Date, default: default_value },
    // updated: { type: Date, default: default_value },
    //callback  settling
    // call_method: { type: String, default: "GET", enum: status_value },
    // status_vale: { type: String, required: true },
    // success_vale: { type: String, required: true },
    // failed_vale: { type: String, required: true },
    // Order_Id_Value: { type: String, required: true },
    // Operator_Id_Valu: { type: String, required: true },
    // Api_Format: { type: String, required: true, default: "JSON", enum: formatvalur },

},
    {
        timestamps: true
    })

module.exports = mongose.model('report', Reportmodel);