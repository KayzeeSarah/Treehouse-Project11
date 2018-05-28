import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {
  render() {
    return (
      <div className="container">

        <nav className="main-nav">
          <ul>
              <li><NavLink to='/icecream'>Ice Cream</NavLink></li>
              <li><NavLink to='/cupcakes'>Cupcakes</NavLink></li>
              <li><NavLink to='/lollipops'>Lollipops</NavLink></li>
              <li><NavLink to='/search'>Search</NavLink></li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default MainNav;
