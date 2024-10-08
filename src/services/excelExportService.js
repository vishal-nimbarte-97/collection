const db = require('../config/db.config');

const excelExportService = {
    getUsersData: async () => {
        try {
            // Query to fetch all users data
            const query = 'SELECT first_name, last_name, email FROM users';
            const result = await db.query(query);

            // Return the rows from the result
            return result.rows;
        } catch (error) {
            console.error('Error fetching users data:', error);
            throw error;
        }
    }
};

module.exports = excelExportService;
