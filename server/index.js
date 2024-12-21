const express = require("express");
const cors = require("cors");
const { authRouter } = require("./router/auth-router");
const { charactersRouter } = require("./router/characters-router");
const { formsRouter } = require("./router/forms-router");
require("./db/mysql");
const app = express();
//CORS is a security feature implemented by web browsers to prevent web pages from making requests to a different domain than the one that served the web page
app.use(cors()); //the server allows cross-origin requests from all origins
app.use(express.json());

app.use("/auth", authRouter);
app.use("/characters", charactersRouter);
app.use("/forms", formsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT);
});
