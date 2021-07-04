import { useEffect, useState } from "react";

export default function GenerateJoke(firstName, lastName) {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function fetchJoke() {
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
        .then((res) => res.json())
        .then((data) => setJoke(data.value.joke))
        .catch((err) => console.log(err));
    }

    fetchJoke();
  }, [firstName, lastName]);

  return joke;
}
