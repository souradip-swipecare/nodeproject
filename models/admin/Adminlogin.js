const mongose = require('mongoose');
const vool_value = [true, false];
const status_value = ["Active", "Inactive"];

// const role = ["rt", "dt", "md", "api"];

//permission valur 

const Userschema = mongose.Schema({
    fname: { type: String},
    lname: { type: String },
    email: { type: String},
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    walletpin: { type: String},
    role: { type: String, default: "admin" },
    sessionotp: { type: String },
    twofactor: { type: Boolean, default: false, enum: vool_value },
    isdeleted: { type: Boolean, default: false, enum: vool_value },
    status: { type: String, default: "Active", enum: status_value },

},
    {
        timestamps: true, versionKey: false
    })

module.exports = mongose.model('user', Userschema);