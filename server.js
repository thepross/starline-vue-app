const express = require('express');

const cors = require('cors');

const serveStatic = require("serve-static")
const path = require('path');
app = express();

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
  ];

  // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
};
// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 5000;
app.listen(port);