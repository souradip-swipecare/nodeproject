const mongoose = require('mongoose');

const connection_string = 'mongodb+srv://' + process.env.DBUSERNAME + ':' + process.env.PASSWORD + '@nodejsaeps.rte3yqd.mongodb.net/' + process.env.DB_NAME + '?retryWrites=true&w=majority';

let option = {
    auth: {
        username: process.env.DBUSERNAME,
        password: process.env.PASSWORD
    },
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = () => {
    try {
        mongoose.connect(connection_string, option);
        console.log("DB connected successfully!");
    } catch (err) {
        console.log(err);
    }
}
