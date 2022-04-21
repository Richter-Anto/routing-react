// //react-roter-dom version 5.0.1
// // import React from "react";
// // import { BrowserRouter, Route, Switch } from "react-router-dom";
// // import Navbar from "./pages/Navbar";
// // import Home from "./components/Home";
// // import Login from "./components/Login";
// // import Signup from "./components/Signup";
// // import Contact from "./components/Contact";
// // import NotFound from "./components/NotFound";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Switch>
// //         <Route path="/" exact>
// //           <Home />
// //         </Route>
// //         <Route path="/login" exact>
// //           <Login />
// //         </Route>
// //         <Route path="/signup" exact>
// //           <Signup />
// //         </Route>
// //         <Route path="/contact" exact>
// //           <Contact />
// //         </Route>
// //         <Route path="*">
// //           <NotFound />
// //         </Route>
// //       </Switch>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// // react-roter-dom version 6.0

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Contact from "./components/Contact";
// // import Home from "./components/Home";
// // import Login from "./components/Login";
// // import NotFound from "./components/NotFound";
// // import Signup from "./components/Signup";
// // import Navbar from "./pages/Navbar";

// // const App = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="login" element={<Login />} />
// //         <Route path="signup" element={<Signup />} />
// //         <Route path="contact" element={<Contact />} />
// //         <Route path="*" element={<NotFound />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// // ! todo list(mine)

// // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import "./global.css"
// // import Navbar from "./todoList/Navbar";
// // import Lists from "./todoList/Lists";
// // import SearchBar from "./todoList/SearchBar";

// // const App = () => {
// //     return (
// //       <>
// //           <Navbar />
// //           <SearchBar />
// //       </>
// //     );
// // };

// // export default App;

// // // ! todo list

// // import React from 'react'
// // import TodoList from './todoList/TodoList'

// // const App = () => {
// //     return (
// //         <TodoList />
// //   )
// // }

// // export default App

// //url router dom parameter
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import MyAccount from "./components/Auth/MyAccount";
// // import Profile from "./components/Auth/Profile";
// // import Users from "./components/Auth/Users";
// // import Contact from "./components/Contact";
// // import Courses from "./components/Courses";
// // import Home from "./components/Home";
// // import Login from "./components/Login";
// // import NotFound from "./components/NotFound";
// // import Signup from "./components/Signup";
// // import Navbar from "./pages/Navbar";

// // const App = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="login" element={<Login />} />
// //         <Route path="signup" element={<Signup />} />
// //         <Route path="contact" element={<Contact />} />
// //         {/* <Route path="/:courses" element={<Courses />} /> */}
// //         <Route path="users" element={<Users />}>
// //           <Route path="profile" element={<Profile />} />
// //           <Route path="myaccount" element={<MyAccount />} />
// //         </Route>
// //         <Route path="*" element={<NotFound />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;






// //custom routes
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MyAccount from "./components/Auth/MyAccount";
// import Profile from "./components/Auth/Profile";
// import Users from "./components/Auth/Users";
// import Contact from "./components/Contact";
// import Courses from "./components/Courses";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import NotFound from "./components/NotFound";
// import Signup from "./components/Signup";
// import Navbar from "./pages/Navbar";
// import CustomRoutes from "./routes/CustomRoutes";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <CustomRoutes />
//     </Router>
//   );
// };

// export default App;



//history object
// import React from "react"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import Home from "./history_object/Home"
// import Login from "./history_object/Login";


// const App = () => {
//   return (
//     <Router>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route path="/" exact>
//           <Home />
//         </Route>
//         <Route path="/login" exact>
//           <Login />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App



//Hoc example functional based
// import React from 'react';
// import AuthMenu from './hoc_example/AuthMenu';
// import Hoc from "./hoc_example/Hoc"

// const App = () => {
//   return (
//     <AuthMenu />
//   )
// }

// export default Hoc(App)

//Hoc example class based
// import React from "react";
// import AuthMenu from "./hoc_example/AuthMenu";
// import { BrowserRouter as Router } from "react-router-dom";
// import Hoc from "./hoc_example/Hoc";

// const App = () => {
//   return (
//     <Router>
//       <AuthMenu />
//     </Router>
//   );
// };

// export default Hoc(App);


//context api for both functional based and class based
// import React from "react";
// import Profile from "./contectApi/Profile";
// import { BrowserRouter as Router } from "react-router-dom";
// import AuthProvider from "./contectApi/ContextApi";
// import Form from "./components/Users/Form";
// import Movie from "./components/movie/Movie";


// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Profile />
//         <Form />
//         <Movie />
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;



//useEffect example of both class based and functional based components
// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import AuthProvider from "./contectApi/ContextApi";
// import HooksExample from "./components/useEffect/HooksExample";
// import ClassExample from "./components/useEffect/ClassExample";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <HooksExample />
//         <ClassExample />
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;


//useEffect example of functional based components (example 2)
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./contectApi/ContextApi";
import HooksExample from "./components/useEffect/HooksExample";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <HooksExample />
      </Router>
    </AuthProvider>
  );
};

export default App;