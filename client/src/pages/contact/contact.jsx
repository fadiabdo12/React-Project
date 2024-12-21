import { BASE_URL } from "../../helpers/constants";
import { useEffect, useState } from "react";
import classes from "./contact.module.css";

export const Contact = () => {
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(BASE_URL + "/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, content }),
    });

    setSubmitted(true);
  };

  return (
    <div className={classes.root}>
      <div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1 className={classes.h1}>Contact Us</h1>
          <br></br>
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label htmlFor="content">Please enter your inquiry</label>
            <textarea
              type="text"
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button type="submit">Send</button>
          {submitted && "Submitted successfully"}
        </form>
      </div>
    </div>
  );
};
