const path = require('path');
const express = require('express');
const logger = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const nodemailer = require('nodemailer');

const app = express();

// routes del cliente
const routes = require('./src/routes/router');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use('/public', express.static('./public'));

// middlewares
app.use(logger('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'proyectomulti'
}, 'single'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// routes     
app.use('/', routes);



// inicio del servidor
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});