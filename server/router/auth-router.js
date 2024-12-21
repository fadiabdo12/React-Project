const { Router } = require("express");
const { connection } = require("../db/mysql");

const authRouter = Router(); //to create an instance for the express router

authRouter.post("/register", async (req, res) => {
  // setting a post route when a post request is made
  const { username, password, name } = req.body;

  const result = await connection.query(
    //prepared statement with placeholders which are replaced by the actual parameters
    "INSERT INTO users (username, password, name) VALUES (?, ?, ?)",
    [username, password, name]
  );

  console.log({ result });
  console.log({ username, name });

  res.json({ message: "registered successfully" });
});

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    //here we search for a user that matches the given username and password
    const [result] = await connection.query(
      // executes an sql query (async)
      "SELECT id, username, name FROM users WHERE username= ? AND password = ?",
      [username, password]
    );
    //if the result array length is 0 then incorrect
    if (result.length === 0) {
      return res.json({ message: "Incorrect credentials" });
    }

    res.json({ user: result[0] }); // if the array is not empty and a user was found
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

module.exports = { authRouter }; // exports to index
