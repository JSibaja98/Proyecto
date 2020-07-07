require('dotenv').config();
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');

const controller = {};

const trasnsporter = nodemailer.createTransport(
    sendgrid({
        auth: {
            api_key: "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",
        },
    }));

controller.send = (req, res) => {
    const { nombre, email, telefono, consulta, comentario } = req.body;
    console.log(email);
    let mailOption = {
        from: 'storeoxl19@gmail.com',
        to: `${email}`,
        subject: `${consulta}`,
        text: `Buenas mi nombre es ${nombre} telefono ${telefono}, y poseo la siguiente consulta: \n${comentario}.`
    }

    trasnsporter.sendMail(mailOption, function(err, data) {
        if (err) {
            console.log('error al enviar', err);
        } else {
            console.log('enviado');
        }
    });
    res.redirect('/');

};

module.exports = controller;