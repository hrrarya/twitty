import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../../store/actions/authAction";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: {},
  };

  onChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    this.props.login({ email, password }, this.props.history);
  };

  render() {
    const { email, password } = this.state;
    if (this.props.auth.isAuthenticated) return <Redirect to="/" />;
    return (
      <div className="twitter_login container h-screen flex items-center justify-center flex-col">
        <div className="w-1/4 shadow-lg px-4 py-6">
          <h3 className="text-center p-4">Sign in</h3>
          <form className="mb-2" onSubmit={this.onSubmitHandle}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.onChangeHandle}
                placeholder="Email"
                className="w-full border border-gray-300 px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.onChangeHandle}
                placeholder="Password"
                className="w-full border border-gray-300 px-2 py-1"
              />
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                value="Sign in"
                className="px-2 py-1 bg-blue-600 text-white"
              />
            </div>
          </form>
          <a href="/#" className="text-sm block">
            Forget password
          </a>
          <Link to="/register" className="text-sm underline block">
            Don't have an account? Create now.
          </Link>
        </div>
      </div>
    );
  }
}

const maptStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(maptStateToProps, { login })(Login);
