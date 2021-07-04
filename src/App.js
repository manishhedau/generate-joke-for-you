import "./App.css";
import React, { useState } from "react";
import JokeForm from "./JokeForm";
import JokeFilter from "./JokeFilter";
import FilteredJokes from "./FilteredJokes";

function App() {
  const [recentJoke, setRecentJoke] = useState([]);
  const [filteredName, setFilteredName] = useState("");

  function addRecentJokeHandler(newJoke) {
    setRecentJoke((prevState) => {
      return [newJoke, ...prevState];
    });
  }

  function filterChangeHandler(selectedName) {
    // console.log(selectedName);
    setFilteredName(selectedName);
  }

  let filterJoke;
  if (filteredName === "") {
    filterJoke = recentJoke;
  } else {
    filterJoke = recentJoke.filter((joke) => {
      return joke.name === filteredName;
    });
  }

  return (
    <div>
      <div className="joke__project">
        <JokeForm onAddRecentJoke={addRecentJokeHandler} />
        <div className="recent__jokes">
          <h3>Recent Search Joke</h3>
          <JokeFilter
            selected={filteredName}
            onChangeFilter={filterChangeHandler}
            jokes={recentJoke}
          />
          <FilteredJokes filterJoke={filterJoke} />
        </div>
      </div>
      <footer>
        <p>
          Project Build By -{" "}
          <a href="https://github.com/manishhedau">Manish Hedau</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
