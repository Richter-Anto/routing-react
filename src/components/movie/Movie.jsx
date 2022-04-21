//forward ref concept example 2
import React, { useRef, useState } from "react";
import Player from "./Player";

const Movie = () => {
  let movieRef = useRef();
  let [play, setPlay] = useState(true);
  let PlayOrPause = () => {
    setPlay(!play);
    if (play === true) {
      movieRef.current.play();
    } else {
      movieRef.current.pause();
    }
  };
  return (
    <div>
      <Player ref={movieRef} handlePlay={PlayOrPause} />
    </div>
  );
};

export default Movie;
