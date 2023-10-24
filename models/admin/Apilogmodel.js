const mongose = require('mongoose');
const vool_value = [true, false];
const status_value = [0, 1];
const type = ["prepaid", "postpaid", "dth", "electricity", "aeps", "payout", "pan"];
// 0 for deaction 1 for active
//add commision to schema

const Apilog = mongose.Schema({
    opname: { type: String, required: true },
    requlr: { type: String },
    response: { type: String },
    opimg: { type: String },
    type: { type: String,enum:type },
},
    {
        timestamps: true
    })

module.exports = mongose.model('apilog', Apilog);