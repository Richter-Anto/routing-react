import React from 'react'

const Navbar = () => {
  return (
    <section className="Navbar_sec">
      <article className="Navber_art">
        <div className="left_nav">TODO List</div>
        <div className="right_nav">
          <label htmlFor='search'>Create New List</label>
        </div>
      </article>
    </section>
  );
}

export default Navbar