import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <section>
      <article>
        <div className="logoBlock">Logo</div>
        <div className="menuBlock">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/users">Richter</Link>
              <ul>
                <li>
                  <Link to="/users/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/users/myaccount">My account</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
