const { Router } = require("express");
const { connection } = require("../db/mysql");

const formsRouter = Router();

formsRouter.post("/", async (req, res) => {
  // to insert a a contact us query
  const { name, email, content } = req.body;
  await connection.query(
    "INSERT INTO forms (name, email, content) VALUES (?, ?, ?)",
    [name, email, content]
  );

  res.json({ success: true });
});

module.exports = { formsRouter }; // exports to index
