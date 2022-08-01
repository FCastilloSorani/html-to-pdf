const express = require('express');
const router = express.Router();

// Middlewares
router.use(express.urlencoded({ extended: true }));

// Controllers
const pdfController = require('../controllers/pdf.controller');

// Routes
router.post('/', pdfController.genPdf);

module.exports = router;
