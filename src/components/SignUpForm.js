import React from 'react';

class SignUpForm extends React.Component {

  render() {
    return(
      <div className="container">
        <form ref={(input) => this.SignUpForm = input} className="product-edit">
          <input ref={(input) => this.firstName = input} type="text" placeholder="Name"/>
          <input ref={(input) => this.email = input} type="text" placeholder="Email Address"/>
          <input ref={(input) => this.password = input} type="text" placeholder="Password"/>
          <input ref={(input) => this.password = input} type="text" placeholder="Re-enter Password"/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
