const mongose = require('mongoose');
const vool_value = [true, false];
const status_value = ["Active", "Inactive"];
const show = [0,1];
const defaultvalue = "null";
const role = ["rt", "dt", "md", "api"];

//permission valur 
const permission = mongose.Schema({
    permissionid: { type: String},
    active: { type: Number, enum: show},
    show: { type: Number, enum: show},
    slug: { type: String }
});
const details = mongose.Schema({
    addhar: { type: Number, default: 0 },
    pan: { type: Number, default: 0 },
    adimg: { type: String,default:defaultvalue },
    panimg: { type: String, default: defaultvalue }
});
const stock = mongose.Schema({
    rt: { type: Number, defaultvalue:0 },
    dt: { type: Number, defaultvalue :0},
});
const Userschemac = mongose.Schema({
    fname: { type: String, required: true },
    lname: { type: String },
    email: { type: String, required: true,unique:true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    scheme_id: { type: mongose.Schema.Types.ObjectId, ref: 'schema' },
    details: [details],
    stock: [stock],
    wallet: { type: String, required: true },
    walletpin: { type: String, required: true },
    role: { type: String,default:"rt",enum: role},
    permisiion: [permission],
    adress: { type: String, default: defaultvalue },
    state: { type: String, default: defaultvalue },
    dristic: { type: String, default: defaultvalue },
    pincode: { type: String, default: defaultvalue },
    buisnessname: { type: String, default: defaultvalue },
    gst: { type: String, default: defaultvalue },
    buisnesspan: { type: String, default: defaultvalue },
    sessionotp: { type: String },
    emailv: { type: Boolean, default: false, enum: vool_value },
    mobilev: { type: Boolean, default: false, enum: vool_value },
    twofactor: { type: Boolean, default: false, enum: vool_value },
    isdeleted: { type: Boolean, default: false, enum: vool_value },
    status: { type: String, default: "Active", enum: status_value },
},
    {
        timestamp: true, versionKey: false
    })

module.exports = mongose.model('userc', Userschemac);