const { Router } = require("express");
const { connection } = require("../db/mysql");

const charactersRouter = Router();

charactersRouter.get("/", async (req, res) => {
  // to get the list of characters from database
  const [characters] = await connection.query("SELECT * FROM characters");

  res.json({ characters });
});

charactersRouter.post("/", async (req, res) => {
  // to insert a new character to the databsase
  const { name, role, deathBlow } = req.body;
  await connection.query(
    "INSERT INTO characters (name, role, deathBlow) VALUES (?, ?, ?)",
    [name, role, deathBlow]
  );

  res.json({ success: true });
});

charactersRouter.patch("/", async (req, res) => {
  // to update a current character in the database
  console.log("pathc");
  try {
    const { id, name, role, deathBlow } = req.body;
    await connection.query(
      "UPDATE characters SET name=?, role=?, deathBlow=? WHERE id=?",
      [name, role, deathBlow, id]
    );

    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
});

charactersRouter.delete("/:characterId", async (req, res) => {
  // to delete a current character in the database
  const { characterId } = req.params;
  await connection.query("DELETE FROM characters WHERE id=?", [characterId]);

  res.json({ success: true });
});

module.exports = { charactersRouter }; // exports to index
