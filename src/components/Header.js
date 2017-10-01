import React from 'react';
import { NavLink } from 'react-router-dom';
const queryString = require('query-string');

const Header = (props) => {
  const parseUrl = () => {
    const parsed = queryString.parse(window.location.search);
    return parsed;
  }

  return(
      <header>
        <div className="logo">
            Boom &nbsp;Bap &nbsp;Shop
        </div>
        <div className="navigation-bar categories">
          <ul>
            <li><NavLink to={{pathname: '/', search: '?category=crib'}} isActive={() => parseUrl().category === "crib"}>Crib</NavLink></li>
            <li><NavLink to={{pathname: '/', search: '?category=tech'}} isActive={() => parseUrl().category === "tech"}>Tech</NavLink></li>
            <li><NavLink to={{pathname: '/', search: '?category=threads'}} isActive={() => parseUrl().category === "threads"}>Threads</NavLink></li>
            <li><NavLink to={{pathname: '/', search: '?category=media'}} isActive={() => parseUrl().category === "media"}>Media</NavLink></li>
            {/* <li><NavLink to={{pathname: '/', search: '?category=vice'}} isActive={() => parseUrl().category === "vice"}>Vice</NavLink></li> */}
          </ul>
        </div>
        {/* <nav className="navigation-bar">
          <ul>
            <li><Link to="/fresh" >Fresh</Link></li>
            <li>Feature</li>
            <li>Favorite</li>
          </ul>

        </nav> */}
      </header>
  )
}

export default Header;
