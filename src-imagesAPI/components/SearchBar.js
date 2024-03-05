import "./SearchBar.css";

import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  // const handleClick = () => {
  //   onSubmit("cars");
  // };
  const [term, setTerm] = useState("");

  const handleFormClick = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormClick}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange}></input>
      </form>
    </div>
  );
}
