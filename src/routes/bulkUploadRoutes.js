const express = require('express');
const router = express.Router();
const multer = require('multer');
const bulkUploadController = require('../controllers/bulkUploadController');

// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

router.post('/bulk-upload', upload.single('file'), bulkUploadController.uploadExcel);

module.exports = router;
