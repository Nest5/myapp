
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('../routes/bookRoutes');
const mongoose = require('../config');
const path = require('path');


const app = express();

const dotenv = require('dotenv');
dotenv.config({path: 'config.env'});

app.use(cors());
app.use(bodyParser.json());
app.use('/api', bookRoutes);




app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
console.log(`Server is running on port ${PORT}`);
});
