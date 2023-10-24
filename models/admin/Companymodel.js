const mongose = require('mongoose');
const vool_value = [true, false];
const status_value = [0, 1];
const role = ["rt", "dt", "md", "api"];
const type = ["prepaid", "postpaid", "dth","dmt", "electricity", "aeps", "payout", "pan"];
// 0 for deaction 1 for active
//add commision to schema
const newss = mongose.Schema({
    id: { type: String },
    news: { type: String },
    role: { type: String, enum: role },
    type: { type: String, enum: type },
    dashboard: { type: String },
    status: { type: Number, default: 1, enum: status_value },

});
const banner = mongose.Schema({
    id: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, required: true, enum: type },
    status: { type: Number, default: 1, enum: status_value },
});
const charge = mongose.Schema({
    id: { type: String, required: true },
    amount: { type: String, required: true },
    type: { type: String, required: true, enum: type },
    status: { type: Number, default: 1, enum: status_value },
});
const Company = mongose.Schema({
    name: { type: String },
    support: { type: String},
    email: { type: String },
    whatsapp: { type: String },
    news: [newss],
    banner: [banner],
    charge: [charge],
    isdeleted: { type: Boolean, default: false, enum: vool_value },
    status: { type: Number, default: 1, enum: status_value },
},
    {
        timestamps: true
    })

module.exports = mongose.model('company', Company);