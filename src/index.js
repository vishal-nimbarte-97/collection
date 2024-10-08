const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db.config');
const bulkUploadRoutes = require('./routes/bulkUploadRoutes');
const excelExportRoutes = require('./routes/excelExportRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', bulkUploadRoutes);
app.use('/api', excelExportRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
