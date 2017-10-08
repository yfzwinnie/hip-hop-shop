import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    let target = event.target,
        name = target.name,
        value = target.value;

        this.setState({
          [name]: value
        });
  }

  handleSubmit() {
    console.log(this.state)
  }

  render() {
    return(
      <div className="container">
        <h2>Sign up Now</h2>
        <form onSubmit={this.handleSubmit} className="product-edit">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <input
            name="email"
            type="text"
            placeholder="Email Address"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Re-enter Password"
            onChange={this.handleInputChange}
            value={this.state.confirmPassword}
          />
          <button type="submit" className="btn">Sign Up</button>
          <p>Already have an account? <Link to="/login">Log in.</Link></p>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
