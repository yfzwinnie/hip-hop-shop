import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
      <header>
        <div className="logo">
            Boom &nbsp;Bap &nbsp;Shop
        </div>
        <div className="navigation-bar categories">
          <ul>
            <li><Link to={{pathname: '/', search: '?category=crib'}}>Crib</Link></li>
            <li><Link to={{pathname: '/', search: '?category=tech'}}>Tech</Link></li>
            <li><Link to={{pathname: '/', search: '?category=threads'}}>Threads</Link></li>
            <li><Link to={{pathname: '/', search: '?category=media'}}>Media</Link></li>
            <li><Link to={{pathname: '/', search: '?category=vice'}}>Vice</Link></li>
          </ul>
        </div>
        <nav className="navigation-bar">
          <ul>
            <li><Link to="/fresh" >Fresh</Link></li>
            <li>Feature</li>
            <li>Favorite</li>
          </ul>

        </nav>
      </header>
  )
}

export default Header;
