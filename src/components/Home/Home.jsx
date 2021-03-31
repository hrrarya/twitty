import React, { Component } from "react";

class Home extends Component {
  handleChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        tweet: e.target.value,
      };
    });
  };

  render() {
    return (
      <div className="lg:w-2/4 border-r border-l border-gray-50 overflow-x-auto">
        <div className="twitter_middle_head flex justify-between px-2 pb-1 mx-2 border-b-2 border-gray-50">
          <h2>Home</h2>
          <a href="/#" className="hover:bg-gray-300 p-1 rounded-full">
            <i className="fas fa-poo-storm fa-lg text-blue-600"></i>
          </a>
        </div>
        <div className="twitter_tweet_area flex">
          <div className="px-2 m-2 flex-none w-16 justify-center">
            <a href="/#">
              <div className="twitter_user_avater mr-2">
                <img
                  className="rounded-full h-8 w-8"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt="avater"
                />
              </div>
            </a>
          </div>
          <div className="flex-grow px-2 border-b-2 border-gray-50 pb-2">
            <form onSubmit={this.handleSubmit}>
              <textarea
                className="active:border-0 active:border-transparent w-full px-2"
                name="tweet"
                id="tweet"
                onChange={this.handleChange}
                value={""}
              />
              <button
                type="submit"
                className="bg-blue-400 px-4 py-2 text-white rounded-full hover:bg-blue-600 disabled:opacity-50"
                disabled={false}
              >
                Tweet
              </button>
            </form>
          </div>
          <div className="flex-none w-16">right</div>
        </div>
        <div className="twitter_tweet_list">{/* <Tweets /> */}</div>
        <div className="w-full text-center h-8">
          <p ref={this.loadingRef}></p>
        </div>
      </div>
    );
  }
}

export default Home;
