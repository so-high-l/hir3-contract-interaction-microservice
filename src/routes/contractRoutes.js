const express = require('express');
const { createCertificateHandler } = require('../controllers/contractController');

const router = express.Router();

router.post('/mint', createCertificateHandler);

module.exports = router;
