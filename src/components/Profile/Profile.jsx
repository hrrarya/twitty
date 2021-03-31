import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Loading from "../../assets/image/ajax-loader.gif";
import Modal from "../Modal/Modal";
import Tweets from "../Tweets/Tweets";

class Profile extends Component {
  goBack = () => this.props.history.goBack();

  state = {
    isLoading: false,
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
    },
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      user: this.props.user,
    });
  }

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
      following,
      followers,
    } = this.state.user;

    const fullname = first_name + " " + last_name;

    const { isLoading } = this.state;
    if (isLoading)
      return (
        <div className="lg:w-2/4 border-r border-l border-gray-50 overflow-y-auto flex justify-center items-center">
          <div className="loading-image-container">
            <img src={Loading} alt="Loading..." className="w-8" />
          </div>
        </div>
      );

    return (
      <div className="lg:w-2/4 border-r border-l border-gray-50 overflow-y-auto">
        <div className="twitter_middle_head flex px-2 pb-1 mx-2 border-b-2 border-gray-50">
          <button
            onClick={this.goBack}
            className="hover:bg-gray-300 p-1 rounded-full h-8 mr-2"
          >
            <i className="fas fa-long-arrow-alt-left text-blue-600 fa-lg"></i>
          </button>
          <div className="twitter_user_name flex flex-col">
            <p>
              {fullname} {middle_name && `(${middle_name})`}
            </p>
            <p className="text-sm">205 Tweets</p>
          </div>
        </div>
        <div className="twitter_profile border-b border-gray-200 pb-2">
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

            <Modal user={this.props.user} />
          </div>
          <div className="w-full block mt-16">
            <div className="twitter_user_name">
              <p>
                {fullname} {middle_name && `(${middle_name})`}{" "}
                <span className="block text-sm">@{user_name}</span>
              </p>
            </div>
            <div
              className="twitter_user_description mt-1"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <div className="twitter_following_followers mt-1">
              <Link to="/profile" className="no-underline mr-2 hover:underline">
                {following} Following
              </Link>
              <Link to="/profile" className="no-underline mr-2 hover:underline">
                {followers} Followers
              </Link>
            </div>
          </div>
        </div>
        <div className="twitter_section_button w-full flex justify-center border-b border-gray-200 pb-2">
          <Link to="/profile" className="w-full text-center">
            Tweets
          </Link>
        </div>
        <Tweets user_name={user_name} />
      </div>
    );
  }
}

const mapstate = (state) => ({
  user: state.auth.user,
});

export default connect(mapstate)(withRouter(Profile));
