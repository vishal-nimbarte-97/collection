const xlsx = require('xlsx');
const db = require('../config/db.config');

const bulkUploadService = {
    processExcel: async (file) => {
        
        const workbook = xlsx.readFile(file.path);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert the worksheet to JSON
        const jsonData = xlsx.utils.sheet_to_json(worksheet);

        // Query to insert data into the 'users' table
        const query = `INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)`;

        for (let row of jsonData) {
            try {
                // Ensure column names match Excel headers
                await db.query(query, [row.first_name, row.last_name, row.email]);
            } catch (err) {
                console.error('Error inserting row', err);
                throw err;
            }
        }

        return jsonData.length; // Return the number of rows inserted
    }
};

module.exports = bulkUploadService;
