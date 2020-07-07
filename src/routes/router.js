const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const email = require('../controllers/email');
const controllerUsuario = require('../controllers/controllersUsuarios');

router.get('/', controller.principal);
router.get('/contact', controller.contact);
router.get('/login', controller.login);
router.post('/log_In', controllerUsuario.login);
router.get('/billboard', controller.billboard);
router.post('/send-email', email.send);

module.exports = router;