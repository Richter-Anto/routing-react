import React, { useRef, useState } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let match = useRouteMatch();
  let { id } = useParams();
  let [state, setState] = useState(true);
  let btn = useRef();
  console.log(match);
  console.log(location);
  console.log(id);

  //using state to validate
  // let ValidateAuth = () => {
  //   if (state === true) {
  //     history.push("/")
  //   }
  // }

  //using "location" to add class name by checking path
  // let ValidateAuth = () => {
  //   if (location.pathname === "/login") {
  //     btn.current.classList.add("login");
  //   } else {
  //     btn.current.classList.remove("login");
  //   }
  // };

  //using "useRouteMatch" to add class name 
   let ValidateAuth = () => {
     if (match.path === "/login") {
       btn.current.classList.add("login");
       console.log(location);
     } else {
       btn.current.classList.remove("login");
     }
  };
  
  return (
    <div>
      <h2>Please Login to the App</h2>
      <button onClick={ValidateAuth} ref={btn}>
        Login
      </button>
    </div>
  );
};

export default Login;
