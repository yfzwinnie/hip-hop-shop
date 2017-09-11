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
            <li>Crib</li>
            <li>Tech</li>
            <li>Threads</li>
            <li>Media</li>
            <li>Vice</li>
          </ul>
        </div>
        <nav className="navigation-bar">
          <ul>
            <li><Link to="/fresh" >Fresh</Link></li>
            <li>Feature</li>
            <li>Favorite</li>
            <li><Link to="/admin" >Admin</Link></li>
          </ul>

        </nav>
      </header>
  )
}

export default Header;
