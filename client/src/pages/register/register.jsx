import { useState } from "react";
import { BASE_URL } from "../../helpers/constants";
import { validateUsername } from "../../helpers/validators";
import { Form } from "../../components/form/form";
import classes from "./register.module.css";
import { Input } from "../../components/input/input";

export const Register = ({ setPathname }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    // when the user clicks the register button
    e.preventDefault();

    const usernameErrorMessage = validateUsername(username);
    if (usernameErrorMessage) {
      setUsernameError(usernameErrorMessage);
      return;
    } else {
      setUsernameError("");
    }

    const response = await fetch(BASE_URL + "/auth/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, name }),
    });
    const data = await response.json();

    // success
    setPathname("/login");
  };

  return (
    <div className={classes.root}>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError}
        <Input
          label="Full name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <div>
          Already have a user?{" "}
          <span className="link" onClick={() => setPathname("/login")}>
            Login
          </span>
        </div>
      </Form>
    </div>
  );
};
