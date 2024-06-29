const express = require("express");
const app = express();
const ConnectToMongo = require("./db");
const cors = require("cors");
require("dotenv").config();
ConnectToMongo();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.use("/api/user", require("./routes/user"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
