const express = require("express");
const cors = require("cors");

require("dotenv").config();

const db = require("./app/models");

db.sequelize.sync();

const app = express();

// parse requests of content-type - application/json
// Init middlewares
app.use(express.json({ extended: false }));
app.use(cors());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
