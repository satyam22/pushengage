import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';
// import { Redirect } from 'react-router-dom';
import Dashboard from './../dashboard/Dashboard';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    console.log("username password:: ", username, password);
    if (username && password)
      this.props.requestLogin(username, password);
  }
  render() {
    const { username, password } = this.state;
    console.log("loginSuccessful: ",this.props.loginSuccessful);

    if (this.props.loginSuccessful) {
      return <Dashboard />
    }
    else {
      return (
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label>Username/Email:
          <input type="text" value={username} onChange={this.handleUsername} required />
          </label>
          <label> Password
          <input type="password" value={password} onChange={this.handlePassword} required />
          </label>
          <input type="submit" value="Login" />
        </form>
      )
    }
  }
}
const mapStateToProps = (state) => ({
  loginSuccessful: state.loginSuccessful
})
const mapDispatchToProps = dispatch => ({
  requestLogin: (email, password) => dispatch(loginRequest(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);