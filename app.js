
  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const bookRoutes = require('./routes/bookRoutes');
  const mongoose = require('./config');


  const app = express();

  const dotenv = require('dotenv');
  dotenv.config({path: 'config.env'});

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/api', bookRoutes);
  app.use(express.static("./public"));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
  });


/*

Esto es lo que en teoria va en vercel.json

  {
    "version": 2,
    "builds": [
      {
        "src": "app.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/api/(.*)",
        "dest": "/app.js"
      }
    ]
  }
    */