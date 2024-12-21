import { useState } from "react";
import { BASE_URL } from "../../helpers/constants";
import { validatePassword, validateUsername } from "../../helpers/validators";
import { Input } from "../../components/input/input";
import classes from "./login.module.css";
import { Form } from "../../components/form/form";
import { Button } from "../../components/Button/button";

// export the login component
export const Login = ({ setPathname, setUser }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    // when the user clicks the login button
    e.preventDefault();

    const usernameErrorMessage = validateUsername(username); //run the validation
    if (usernameErrorMessage) {
      setUsernameError(usernameErrorMessage);
      return; // if there is a username error then the function does not continue
    } else {
      setUsernameError("");
    }

    const passwordErrorMessage = validatePassword(password); //run the validation
    if (passwordErrorMessage) {
      setPasswordError(passwordErrorMessage);
      return;
    } else {
      setPasswordError("");
    }

    const response = await fetch(BASE_URL + "/auth/login", {
      // we then use fetch to send a post request to the login api to check the entered username and password and after that we wait for the response... data = await response.json
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (data.message) {
      // if there's an error if not we get redirected to home
      setLoginError(data.message);
    } else {
      setPathname("/home");
      setUser(data.user);
    }
  };

  return (
    <div className={classes.root}>
      <Form onSubmit={handleSubmit}>
        <Input
          label={"Username"}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError} {/**it shows only if there is a message */}
        <Input
          label={"Password"}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError}
        <button type="submit">Login</button>
        <div>
          Don't have a user?{" "}
          <span className="link" onClick={() => setPathname("/register")}>
            Register
          </span>
        </div>
        {loginError}
        <Button />
      </Form>
    </div>
  );
};
