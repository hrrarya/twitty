import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../store/actions/authAction.js";

class Registration extends Component {
  state = {
    first_name: "",
    last_name: "",
    middle_name: "",
    user_name: "",
    email: "",
    password: "",
    error: {
      username: "",
      email: "",
    },
  };
  
  onChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandle = async (e) => {
    const {first_name, last_name, middle_name, user_name, email, password} = this.state;
    e.preventDefault();

    console.log("submitted");

    const error = { ...this.state.error };

    const data = {
      first_name,
      last_name,
      middle_name,
      user_name,
      email,
      password,
      follwing: 0,
      followers: 0,
      description: "",
      profile_pic:
        "https://pbs.twimg.com/profile_images/1071674355619266560/WLzlmxxk_400x400.jpg",
      cover_pic:
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    };


    if (error.username === "" && error.email === "") {
      this.props.register(data, this.props.history);
    }
  };

  render() {
    const {first_name, last_name, middle_name, user_name, email, password, error} = this.state;
    return (
      <div className="twitter_registration container h-screen flex items-center justify-center flex-col">
        <div className="w-1/4 shadow-lg px-4 py-6">
          <h3 className="text-center p-4">Sign up</h3>
          <form className="mb-2" onSubmit={this.onSubmitHandle}>
            <div className="mb-4">
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={this.onChangeHandle}
                placeholder="First Name"
                className="w-full border border-gray-300 px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={this.onChangeHandle}
                placeholder="Last Name"
                className="w-full border border-gray-300 px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="middle_name"
                value={middle_name}
                onChange={this.onChangeHandle}
                placeholder="Middle Name"
                className="w-full border border-gray-300 px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="user_name"
                value={user_name}
                onChange={this.onChangeHandle}
                placeholder="User Name"
                className="w-full border border-gray-300 px-2 py-1"
              />
              {"" !== error.username && <p>{error.username}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.onChangeHandle}
                placeholder="Email"
                className="w-full border border-gray-300 px-2 py-1"
              />
              {"" !== error.email && <p>{error.email}</p>}
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
                value="Sign up"
                className="px-2 py-1 bg-blue-600 text-white"
              />
            </div>
          </form>
          <Link to="/login" className="text-sm underline block">
            Already have an account? Sign in.
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { register })(Registration);
