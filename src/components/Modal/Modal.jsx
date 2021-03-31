import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  state = {
    open: false,
    user: {
      first_name: "",
      last_name: "",
      middle_name: "",
      user_name: "",
      following: "",
      followers: "",
      description: "",
      profile_pic: "",
      cover_pic: "",
      location: "",
      website: "",
      iat: "",
      exp: "",
      id: "",
    },
  };

  componentDidMount() {
    this.setState({
      // ...this.state,
      user: this.props.user,
    });
  }

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      open: !this.state.open
    });
  };

  handleOnChange = (e) => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({
      ...this.state,
      user,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const user = { ...this.state.user };

    // this.props.updateUser(user);
  };

  activeModalClass = () => (this.state.open ? "" : "hidden");
  render() {
    const {
      id,
      first_name,
      last_name,
      middle_name,
      user_name,
      profile_pic,
      cover_pic,
      description,
      location,
      website,
    } = this.state.user;
    
    return (
      <div>
        <button
          onClick={this.handleOpen}
          className="p-2 border border-blue-600 text-blue-600 float-right mt-2 rounded-full hover:bg-blue-100"
        >
          Edit Profile
        </button>
        <div
          className={`modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 ${this.activeModalClass()}`}
        >
          {/* modal */}
          <div className="bg-white rounded shadow-lg w-2/4 overflow-scroll h-3/4">
            {/* modal header */}
            <div className="border-b px-4 py-2 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="font-semibold text-lg">Profile Update</h3>
              <button
                onClick={this.handleOpen}
                className="text-black close-modal"
              >
                ✗
              </button>
            </div>
            {/* modal body */}
            <div className="p-3">
              <div>
                <img
                  className="h-60 w-full"
                  src={
                    cover_pic ||
                    "http://browjoon.gettimely.com/images/default-cover-image.jpg"
                  }
                  alt="cover"
                />
              </div>
              <div className="relative">
                <div className="twitter_profile_pic absolute top-0 -mt-16 ml-4">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white"
                    src={
                      profile_pic ||
                      "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                    }
                    alt="profile"
                  />
                </div>
              </div>
              <div className="mt-16">
                <form>
                  <div className="my-2">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="w-full px-2 py-1 border border-gray-400"
                      value={first_name}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="w-full px-2 py-1 border border-gray-400"
                      value={last_name}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="middle_name">Middle Name</label>
                    <input
                      type="text"
                      id="middle_name"
                      name="middle_name"
                      className="w-full px-2 py-1 border border-gray-400"
                      value={middle_name}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      name="description"
                      id="bio"
                      className="w-full border border-gray-400"
                      value={description}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="w-full px-2 py-1 border border-gray-400"
                      value={location}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      className="w-full px-2 py-1 border border-gray-400"
                      value={website}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="mb-2">
                    <p>
                      Birth date{" "}
                      <span className="text-sm text-blue-600">Edit</span>
                    </p>
                    <p>February 6, 1997</p>
                  </div>
                  <div className="flex justify-end items-center w-100 border-t p-3">
                    <button
                      onClick={this.handleOpen}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={this.handleSubmit}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(Modal);
