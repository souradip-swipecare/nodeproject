const mongose = require('mongoose');
const vool_value = [true, false];
const status_value = [0,1];
const type = ["prepaid", "postpaid", "dth", "electricity","aeps","payout","pan"];
// 0 for deaction 1 for active

const Operatorschema = mongose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, enum: type },
    //for aeps product payout product only
    minamount: { type: String },
    maxamount: { type: String},
    firstapi: { type: String, required: true },
    secondapi: { type: String, required: true },
    thirdapi: { type: String, required: true },
    //for aeps payout product only 
    isdeleted: { type: Boolean, default: false, enum: vool_value },
    status: { type: Number, default: 1, enum: status_value },
},
    {
        timestamps: true
    })

module.exports = mongose.model('operator', Operatorschema);