import React, { useState, useRef } from "react";
import GenerateJoke from "./GenerateJoke";

export default function JokeForm(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function changeHandlerforFirstName(e) {
    setFirstName(e.target.value);
  }

  function changeHandlerforLastName(e) {
    setLastName(e.target.value);
  }
  const joke = GenerateJoke(firstName, lastName);

  function submitHandler(event) {
    event.preventDefault();
    const newJoke = {
      id: Math.random().toLocaleString(),
      joke: joke,
      name: `${firstName.trim()} ${lastName.trim()}`.toLowerCase(),
    };
    props.onAddRecentJoke(newJoke);

    setFirstName("");
    setLastName("");
  }

  return (
    <div className="App-link">
      <h1>Generating Joke for You 😂😂😂😎 !!</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name : </label>
        <input
          type="text"
          id="firstName"
          ref={firstNameRef}
          value={firstName}
          onChange={changeHandlerforFirstName}
        />{" "}
        <br />
        <label htmlFor="lastName">Last Name : </label>
        <input
          type="text"
          id="lastName"
          ref={lastNameRef}
          value={lastName}
          onChange={changeHandlerforLastName}
        />{" "}
        <br />
        <button type="submit">Generate Joke 😜😁</button>
      </form>
      <div className="generated__joke">
        <h2>Joke is -</h2> <br />
        <p>{firstName || lastName ? joke : null}</p>
      </div>
    </div>
  );
}
