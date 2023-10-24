const mongose = require('mongoose');
const vool_value = [true, false];
const status_value = [0, 1];
const type = ["prepaid", "postpaid", "dth", "electricity", "aeps", "payout", "pan"];
// 0 for deaction 1 for active
//add commision to schema
const user = mongose.Schema({
    userid: { type: String},

});
const Notification = mongose.Schema({
    msg: { type: String, required: true },
    role: { type: String, required: true, enum: type },
    user: [commision],
    img: { type: String},
    isdeleted: { type: Boolean, default: false, enum: vool_value },
    status: { type: Number, default: 1, enum: status_value },
},
    {
        timestamps: true
    })

module.exports = mongose.model('notification', Notification);