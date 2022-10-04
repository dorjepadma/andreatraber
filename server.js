// Server JS base code
// express is the framework we're going to use to handle requests
const express = require("express");
//multer is used to upload files
const multer = require("multer");
// cors is used to provide a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const upload = multer();
const app = express();

app.use(cors());
app.use(upload.none());

app.use("/api", routes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}.`);
});
