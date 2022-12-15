const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json());

const productsController = require('./controllers/productControllers')
app.use('/api/products', productsController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));


