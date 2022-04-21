import React from "react";
import { useState } from "react";

const SearchBar = () => {
  let [state, setState] = useState("");

  return (
    <>
      <section className="search_sec">
        <form action="get">
          <input
            type="text"
            id="search"
            placeholder="Add new list here"
            autoComplete="off"
            onChange={e => setState(e.target.value)}
          />
        </form>
        <button className="btn" onClick={e => console.log(state)}>
          ADD
        </button>
      </section>
      <div className="list">{state}</div>
    </>
  );
};

export default SearchBar;
