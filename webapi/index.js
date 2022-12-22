require('dotenv').config();
const PORT = process.env.PORT || 5000;
const initMongoDB = require('./myServer_mongodb');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Routes
const productsController = require('./controllers/productControllers');
app.use('/api/products', productsController);

//Initialize
initMongoDB();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));


