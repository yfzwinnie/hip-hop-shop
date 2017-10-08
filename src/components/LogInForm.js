import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: ''
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
        <h2>Welcome back.</h2>
        <form ref={(input) => this.SignUpForm = input} className="product-edit">
          <input
            name="name"
            type="text"
            placeholder="Email Address"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <button type="submit" className="btn">Log In</button>
          <p>Don't have an account? <Link to="/signup">Sign Up.</Link></p>
        </form>
      </div>
    )
  }
}

export default LogInForm;