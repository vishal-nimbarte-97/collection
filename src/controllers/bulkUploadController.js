const bulkUploadService = require('../services/bulkUploadService');

const bulkUploadController = {
    uploadExcel: async (req, res) => {
        try {
            const file = req.file;

            if (!file) {
                return res.status(400).send('No file uploaded');
            }

            // Call service to process the file
            const result = await bulkUploadService.processExcel(file);

            return res.status(200).json({
                message: 'Data uploaded successfully',
                result
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error uploading data');
        }
    }
};

module.exports = bulkUploadController;
