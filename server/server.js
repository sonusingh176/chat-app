let dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const dbConfig = require('./dbConfig'); // Ensure this file is set up to connect to your database
let app=require('./app');

const port = process.env.PORT_NUMBER || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}); 
