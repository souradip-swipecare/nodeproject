const express = require('express');
// const expresslayout = require('express-ejs-layouts');
const path = require('path');
require('dotenv').config();
const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', 'views');


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