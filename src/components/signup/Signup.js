import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupRequesting } from './../../actions';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordMatch: true,
      redirectToLogin: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullname = this.handleFullname.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }

  handleFullname(e) {
    this.setState({ fullName: e.target.value });
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleConfirmPassword(e) {
    e.preventDefault();
    if (this.state.password == e.target.value)
      this.setState({ confirmPassword: e.target.value, passwordMatch: true });
    else
      this.setState({ confirmPassword: e.target.value, passwordMatch: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fullName, username, email, password, passwordMatch } = this.state;
    if (passwordMatch) {
      console.log("values", this.state);
      this.props.requestSignup(fullName, username, email, password);
      this.setState({redirectToLogin: true});
    }
  }

  render() {
    const { fullName, username, email, password, confirmPassword, passwordMatch, redirectToLogin } = this.state;
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label>Full Name:
        </label>
          <input type="text" name="fullName" value={fullName} onChange={this.handleFullname} required />
          <label> Username
        </label>
          <input type="text" name="username" value={username} onChange={this.handleUsername} required />
          <label> Email
        </label>
          <input type="email" name="email" value={email} onChange={this.handleEmail} required />
          <label> Password
        </label>
          <input type="password" name="password" value={password} onChange={this.handlePassword} required />
          <label> Confirm Password
          </label>
          <input type="password" name="confirmPassword" value={confirmPassword}
            onChange={this.handleConfirmPassword} required />
          {!passwordMatch && <span> Password doesn't match</span>}
          <input type="submit" value="Signup" />
        </form>
        {redirectToLogin && <Redirect to='/login' />}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestSignup: (fullName, username, email, password) => dispatch(signupRequesting(fullName, username, email, password))
});

export default connect(null, mapDispatchToProps)(Signup);