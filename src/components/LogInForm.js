import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {

  render() {
    return(
      <div className="container">
        <form ref={(input) => this.SignUpForm = input} className="product-edit">
          <input ref={(input) => this.email = input} type="text" placeholder="Email Address"/>
          <input ref={(input) => this.password = input} type="text" placeholder="Password"/>
          <button type="submit" className="btn">Log In</button>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </form>
      </div>
    )
  }
}

export default LogInForm;