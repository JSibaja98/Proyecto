const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.principal);
router.get('/contact', controller.contact);
router.get('/login', controller.login);

module.exports = router;