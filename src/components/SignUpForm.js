import React from 'react';

class SignUpForm extends React.Component {

  render() {
    return(
      <div className="container">
        <form ref={(input) => this.SignUpForm = input} className="product-edit">
          <input ref={(input) => this.firstName = input} type="text" placeholder="First Name"/>
          <input ref={(input) => this.lastName = input} type="text" placeholder="Last Name"/>
          <input ref={(input) => this.email = input} type="text" placeholder="Email Address"/>
          <input ref={(input) => this.password = input} type="text" placeholder="Password"/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
