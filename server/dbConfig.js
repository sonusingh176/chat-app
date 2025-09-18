const mongoose = require('mongoose');
// Load environment variables from .env file and set them in process.env
//connection logic
mongoose.connect(process.env.CONNECTION_STRING);
// Check if the connection status
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Database connection successful');
});
db.on('error', (error) => {
    console.error('Database connection error:', error);
});

module.exports = db;
// This module exports the database connection so it can be used in other parts of the application. 