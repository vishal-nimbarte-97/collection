const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
const excelExportService = require('../services/excelExportService');

const excelExportController = {
    exportDataToExcel: async (req, res) => {
        try {
            // Fetch data from the service
            const data = await excelExportService.getUsersData();

            // Create a new workbook and worksheet from the data
            const workbook = xlsx.utils.book_new();
            const worksheet = xlsx.utils.json_to_sheet(data);
            xlsx.utils.book_append_sheet(workbook, worksheet, 'Users');

            // Define the file path
            const filePath = path.join(__dirname, '../exports', 'users_data.xlsx');
            
            // Write the Excel file to the file system
            xlsx.writeFile(workbook, filePath);

            // Send the Excel file as a download response
            res.download(filePath, 'users_data.xlsx', (err) => {
                if (err) {
                    console.error('Error sending the file:', err);
                    res.status(500).send('Error exporting data');
                }

                // Optional: Delete the file after sending it to clean up
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('Error deleting the file:', err);
                    }
                });
            });
        } catch (error) {
            console.error('Error exporting data to Excel:', error);
            res.status(500).send('Error exporting data');
        }
    }
};

module.exports = excelExportController;
