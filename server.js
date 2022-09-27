// Server JS base code
// express is the framework we're going to use to handle requests
const express = require("express");
//multer is used to upload files
const multer = require("multer");
// cors is used to provide a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require("cors");

const app = express();
const upload = multer();

const port = process.env.PORT || 3000;

app.use(cors());
app.any();

app.listen(port, () => {
  console.log('Express started on port: ', port);
});
