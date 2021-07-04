import React from "react";
import "./JokeFilter.css";

// this component filter by user name and add the user name in filter
export default function JokeFilter({ selected, onChangeFilter, jokes }) {
  function changeHandler(e) {
    onChangeFilter(e.target.value);
  }

  const uniqueNameSet = new Set();
  jokes.forEach((joke) => {
    uniqueNameSet.add(joke.name);
  });

  const uniqueNameList = [...uniqueNameSet];

  return (
    <div>
      <label htmlFor="filter_name">Filter By Name</label>
      <select id="filter_name" onChange={changeHandler}>
        <option value="">
          {Boolean(selected) === false ? "Show All" : "Show All"}
        </option>
        {uniqueNameList.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
}
