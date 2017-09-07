import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
      <header>
        <div className="logo">
          IDFWU
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
