const express = require('express');
// const expresslayout = require('express-ejs-layouts');
const path = require('path');
_ = require('underscore');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');;
require('dotenv').config();
const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
//body parsher 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(flash());
app.use(cookieParser());
const session = require('express-session');
app.use(session({
    secret: 'SOURADIPBBAYHDMN',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3030'); // Replace with your frontend's URL
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


//router part add
const userrout = require("./route/userrouter");
const adminrout = require("./route/adminrouter");




app.use(userrout);
app.use(adminrout);








require(path.join(__dirname, '/config', 'datab'))();


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server i sconnected to port http://127.0.0.1:${port}`);
}) 