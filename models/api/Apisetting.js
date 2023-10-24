const mongose = require('mongoose');
// 0 for deaction 1 for active

const Operatorschema = mongose.Schema({
    ip: { type: String, required: true },
    token: { type: String, required: true },
    secrectkey: { type: String, required: true },
    ivkey: { type: String, required:true },
},
    {
        timestamps: true
    })

module.exports = mongose.model('operator', Operatorschema);