const express = require('express');
const router = express.Router();

// Middlewares
router.use(express.text());

// Controllers
const pdfController = require('../controllers/pdf.controller');

// Routes
router.post('/', pdfController.getPdf);

module.exports = router;
