import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { faBars } from '@fortawesome/fontawesome-free-solid';
const queryString = require('query-string');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileNavOpen: false,
    }
  }

  parseUrl() {
    const parsed = queryString.parse(window.location.search);
    return parsed;
  }

  toggleMenu = () => {
    console.log("toggled");
    this.setState((prevState) => {
      return {isMobileNavOpen: !prevState.isMobileNavOpen};
    }, () => {console.log(this.state.isMobileNavOpen);});
  }

  render() {
    return(
      <header>      
        <nav className="navbar">
          <div className="navbar-header">
            <a role="button" className="navbar-toggle" onClick={this.toggleMenu}>
              <FontAwesomeIcon iconDefinition={faBars} />
            </a>
            <div className="navbar-brand">
              <NavLink to="/">Boom &nbsp;Bap &nbsp;Shop</NavLink>
            </div>
            <div className="top-nav">
              <a role="button" className="search-icon">
                <span id="search-text">Search</span><FontAwesomeIcon iconDefinition={faSearch} />
              </a>
              <ul className="account-nav hidden-sm">
                <li><NavLink to="/signup">Signup</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
              </ul>
            </div>
          </div>
          <div 
            className={["collapse", "navbar-collapse"].concat(
              this.state.isMobileNavOpen ? "navbar-collapse-show" : ""
            ).join(' ')}
          >
            <ul className="navbar-nav categories">
              <li><NavLink to={{pathname: '/', search: '?category=crib'}} isActive={() => this.parseUrl().category === "crib"}>Crib</NavLink></li>
              <li><NavLink to={{pathname: '/', search: '?category=tech'}} isActive={() => this.parseUrl().category === "tech"}>Tech</NavLink></li>
              <li><NavLink to={{pathname: '/', search: '?category=threads'}} isActive={() => this.parseUrl().category === "threads"}>Threads</NavLink></li>
              <li><NavLink to={{pathname: '/', search: '?category=media'}} isActive={() => this.parseUrl().category === "media"}>Media</NavLink></li>
            </ul>
          </div>
         
        </nav>
      </header>
    )

  }
}

export default Header;
