import React from "react";

export default function FilteredJokes({ filterJoke }) {
  if (filterJoke.length === 0)
    return (
      <h3 style={{ textAlign: "center", fontWeight: "500" }}>
        No Result found, Please Search a Joke 😊
      </h3>
    );

  if (filterJoke.length > 0) {
    return (
      <div className="show__jokes">
        {filterJoke.map((joke) => (
          <div key={joke.id} className="joke">
            <h4>Name : {joke.name}</h4>
            <p>
              <strong>Joke</strong> : {joke.joke}
            </p>
            😂😂🤣🤣😜
          </div>
        ))}
      </div>
    );
  }
}
