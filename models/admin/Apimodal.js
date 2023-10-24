const mongose = require('mongoose');
const default_value = "null";
const status_value = ["GET", "POST"];
// const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
const vool_value = [true, false];
const api_product = ["prepaid", "postpaid", "dth", "electricity", "aeps", "payout", "pan"];
const formatvalur = ["JSON", "XML"];
const stsvalue = ["Active", "Inactive"];

const Apimodel = mongose.Schema({
    name: { type: String, default: default_value },
    id: { type: String, default: default_value },
    userid: { type: String, default: default_value },
    apitoken: { type: String, default: default_value },
    api_url: { type: String, required: true },
    apibal_url: { type: String },
    method: { type: String, default: "GET", enum: status_value },
    product: { type: String, default: "Prepaid", enum: api_product },
   
    status_value: { type: String, default: default_value, required: true },
    success_value: { type: String, default: default_value, required: true },
    failed_value: { type: String, default: default_value, required: true },
    pending_value: { type: String, default: default_value, required: true },
    order_id_Value: { type: String, default: default_value, required: true },
    api_Format: { type: String, required: true, default: "JSON", enum: formatvalur },
    errorr_value: { type: String, default: default_value, required: true },

    //callback  settling
    cerrorr_value: { type: String, default: default_value, required: true },
    cstatus_value: { type: String, default: default_value },
    csuccess_value: { type: String, default: default_value },
    cpending_value: { type: String, default: default_value },
    cfailed_value: { type: String, default: default_value },
    corder_Id_Value: { type: String, default: default_value },
    coperator_Id_Value: { type: String, default: default_value },
    capi_Formatc: { type: String, default: "JSON", enum: formatvalur },
    status: { type: String, default: "Active", enum: stsvalue },
    isdeleted: { type: Boolean, default: false, enum: vool_value },
},
    {
        timestamps: true
    })
// For pagination
// Apimodel.plugin(mongooseAggregatePaginate);

module.exports = mongose.model('api', Apimodel);