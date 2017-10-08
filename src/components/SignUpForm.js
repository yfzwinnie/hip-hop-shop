import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {

  render() {
    return(
      <div className="container">
        <h2>Sign up Now</h2>
        <form ref={(input) => this.SignUpForm = input} className="product-edit">
          <input ref={(input) => this.firstName = input} type="text" placeholder="Name"/>
          <input ref={(input) => this.email = input} type="text" placeholder="Email Address"/>
          <input ref={(input) => this.password = input} type="password" placeholder="Password"/>
          <input ref={(input) => this.password = input} type="password" placeholder="Re-enter Password"/>
          <button type="submit" className="btn">Sign Up</button>
          <p>Already have an account? <Link to="/login">Log in.</Link></p>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
