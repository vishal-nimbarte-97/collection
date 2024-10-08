const express = require('express');
const router = express.Router();
const excelExportController = require('../controllers/excelExportController');

// Route for exporting users data to an Excel file
router.get('/export-excel', excelExportController.exportDataToExcel);

module.exports = router;
