//useEffect example of functional based
// import React, { useEffect, useState } from "react";

// const HooksExample = () => {
//   let [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `hello shashi ${count}`;
//   }, [count]);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default HooksExample;


//useEffect example of functional based (example 2) way 1

import React, { useState, useEffect } from 'react'
import STYLES from "./Hook.module.css"

const HooksExample = () => {
  let [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", e => {
      setWidth(window.innerWidth);
      console.log("rendered n times");
      
      if (window.innerWidth < 500) {
        document.body.style.background = "red";
      } else if (window.innerWidth < 750) {
        document.body.style.background = "blue";
      } else if (window.innerWidth < 1000) {
        document.body.style.background = "green";
      } else if (window.innerWidth > 1000) {
        document.body.style.background = "grey";
      }
    })
    return () => {
      window.removeEventListener("resize", e => {
        setWidth(window.innerWidth)
      })
    }
  },[])
  return (
    <div
      className={
        (window.innerWidth < 300 ? STYLES.container0 : window.innerWidth < 500 ? STYLES.container1 : window.innerWidth < 750 ? STYLES.container2 : window.innerWidth < 1000 ? STYLES.container3 : window.innerWidth > 1000 ? STYLES.container4 : "")
      }
    >
      <div>{width}</div>
      <div>{width}</div>
      <div>{width}</div>
      <div>{width}</div>
      <div>{width}</div>
      <div>{width}</div>
      <div>{width}</div>
      <div>{width}</div>
      <div>{width}</div>
      <div>{width}</div>
    </div>
  );
}

export default HooksExample



//useEffect example of functional based (example 2) way 2

// import React, { useEffect, useState } from "react";
// import Style from "./Hook.module.css";

// let column = 0;
// const Grid = () => {
//   const [column, setColumn] = useState(4);

//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       let widthwin = window.innerWidth;
//       if (widthwin > 1000) {
//         setColumn(4);
//       } else if (widthwin > 800 && widthwin < 1000) {
//         setColumn(3);
//       } else if (widthwin > 500 && widthwin < 800) {
//         setColumn(2);
//       } else if (widthwin < 500) {
//         setColumn(1);
//       }
//     });
//   }, []);

//   return (
//     <div className={Style.container}>
//       <ul style={{ gridTemplateColumns: `repeat(${column},1fr)` }}>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//         <li>4</li>
//         <li>5</li>
//         <li>6</li>
//         <li>7</li>
//         <li>8</li>
//       </ul>
//     </div>
//   );
// };

// export default Grid;