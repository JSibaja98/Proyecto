const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const email = require('../controllers/email');
const controllerUsuario = require('../controllers/controllersUsuarios');
const controllerPeliculas = require('../controllers/controllerPeliculas');

router.get('/', controller.principal);
router.get('/contact', controller.contact);
router.get('/login', controller.login);
router.post('/log_In', controllerUsuario.login);
router.get('/billboard', controllerPeliculas.listBillboard);
router.get('/about', controller.about);
router.get('/deals', controller.deals);
router.post('/send-email', email.send);
router.get('/adminRegCartelera', controllerPeliculas.list);
router.post('/adminRegCartelera', controllerPeliculas.add);

module.exports = router;