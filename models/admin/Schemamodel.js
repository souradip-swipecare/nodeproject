const mongose = require('mongoose');
const vool_value = [true, false];
const status_value = [0, 1];
const role = ["rt","dt","md","api"];
const type = ["prepaid", "postpaid", "dth", "electricity", "aeps", "payout", "pan"];
// 0 for deaction 1 for active
//add commision to schema
const commision = mongose.Schema({
    role: { type: String, required: true,enum :role },
    amount: { type: String, required: true },
    type: { type: String, required: true ,enum:type},
    opimg: { type: String,required:true },
    opid: { type: String, required:true }
    
});
const Schema = mongose.Schema({
    name: { type: String, required: true },
    id: { type: String, required: true },
    commssion: [commision],
    isdeleted: { type: Boolean, default: false, enum: vool_value },
    status: { type: Number, default: 1, enum: status_value },
},
    {
        timestamps: true
    })

module.exports = mongose.model('schema', Schema);