import { useEffect, useState } from "react";
import { BASE_URL } from "../../helpers/constants";
import { CharacterRow } from "./character-row/character-row";
import { Input } from "../../components/input/input";
import classes from "./characters.module.css";

export const Characters = () => {
  const [characters, setCharacters] = useState([]); // array for the list of characters
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [deathBlow, setDeathBlow] = useState(1);
  const [editingId, setEditingId] = useState(); // id for the character currently being edited

  const fetchCharacters = async () => {
    // fetch the characters, to get all the characters from the database
    const response = await fetch(BASE_URL + "/characters");
    const data = await response.json();
    setCharacters(data.characters);
    console.log(data); // Verify that 'deathblow_count' is present in each character object
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleSubmit = async (e) => {
    // handles a form submission when the user adds or edits, post or patch
    e.preventDefault();
    const response = await fetch(BASE_URL + "/characters", {
      method: editingId ? "PATCH" : "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: editingId, name, role, deathBlow }),
    });
    fetchCharacters(); //refresh
  };

  const handleDelete = async (characterId) => {
    // deletes a character, makes a delete request to the api
    const response = await fetch(BASE_URL + "/characters/" + characterId, {
      method: "delete",
    });
    fetchCharacters();
    setName("");
    setRole("");
    setDeathBlow(1);
    setEditingId(undefined);
    fetchCharacters(); //refresh
  };

  const handleEdit = (characterId) => {
    //edits a character
    setEditingId(characterId);
    const character = characters.find(({ id }) => id === characterId);
    setDeathBlow(character.deathBlow);
    setName(character.name);
    setRole(character.role);
  };

  return (
    <div className={classes.root}>
      <div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1 className={classes.h1}>Characters</h1>
          <br></br>
          {characters.map((character) => {
            return (
              <CharacterRow
                id={character.id}
                deathBlow={character.deathBlow}
                name={character.name}
                role={character.role}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            );
          })}
          <div className={classes.inputContainer}>
            <Input
              type="text"
              label="Character name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              label="Role"
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <Input
              label="Death Blow"
              type="number"
              min="1"
              name="deathBlow"
              id="deathBlow"
              value={deathBlow}
              onChange={(e) => setDeathBlow(e.target.value)}
            />
          </div>
          <button type="submit">{editingId ? "Save" : "Add"}</button>
          {/*when the editing id is known then it's in save mode, if it's unkown then it's in add mode */}
        </form>
      </div>
    </div>
  );
};
