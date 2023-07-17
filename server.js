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
    'http://localhost:5000',
    'https://localhost:5000',
    'https://boiling-stream-56078-74a8b7e826b3.herokuapp.com',
    'https://aef1-177-222-111-223.ngrok-free.app',
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
// app.options('*', cors(corsOptions));

app.use(cors());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 5000;
app.listen(port);