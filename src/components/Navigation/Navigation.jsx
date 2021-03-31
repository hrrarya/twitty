import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    const { first_name, last_name, middle_name, user_name } = this.props.user;
    const fullname = first_name + " " + last_name;
    return (
      <header className="lg:w-1/4 flex flex-col justify-between pr-2">
        <div>
          <div className="twitter_home_icon">
            <Link to="/">
              <i className="fa fa-twitter text-blue-600 fa-lg"></i>
            </Link>
          </div>
          <div className="twitter_header_nav mt-4">
            <nav className="twitter_header_nav_list flex flex-col">
              <div>
                <Link
                  to="/"
                  className="hover:text-blue-600 px-4 py-2 inline-block hover:bg-gray-300 rounded-full"
                >
                  <i className="fa fa-home fa-lg"></i> Home
                </Link>
              </div>
              <div>
                <Link
                  to={`/profile/${user_name}`}
                  className="hover:text-blue-600 px-4 py-2 inline-block hover:bg-gray-300 rounded-full"
                >
                  <i className="fa fa-user fa-lg"></i> Profile
                </Link>
              </div>
            </nav>
          </div>
          <div className="twitter_tweet_button_wrapper mt-4">
            <Link
              to="/"
              className="twitter_tweet_button bg-blue-600 text-white hover:bg-blue-800 text-center block px-2 py-2 rounded-full"
            >
              Tweet
            </Link>
          </div>
        </div>
        <div className="twitter_user_ticket mt-2">
          <Link
            to={`/profile/${user_name}`}
            className="flex block justify-between items-center hover:bg-gray-300 rounded-full"
          >
            <div className="twitter_user_avater w-1/6 mr-2">
              <img
                className="rounded-full"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="avater"
              />
            </div>
            <div className="twitter_user_name w-4/6">
              <p>
                {fullname} {middle_name && middle_name}{" "}
                <span>@{user_name}</span>
              </p>
            </div>
            <div className="twitter_user_details w-1/6 text-center px-2">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navigation;
