const mongose = require('mongoose');
const default_value = "null";

const role = ["rt", "dt" , "md","api"];


const slugvalu = ["reacharge","dth","bbps","payout","aeps","dmt","pan","rt","dt","md"]



const Permission = mongose.Schema({
    slug: { type: String, enum: slugvalu },
    role: { type: String, enum: role },
    no: { type: Number, default: default_value },

},
    {
        timestamps: true
    })


module.exports = mongose.model('permission', Permission);