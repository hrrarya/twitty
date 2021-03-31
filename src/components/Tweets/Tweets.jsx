import React, { Component } from "react";
import Loading from "../../assets/image/ajax-loader.gif";
import SingleTweet from "./SingleTweet";

class Tweets extends Component {
  state = {
    tweets: [],
    isLoading: false,
  };

  render() {
    const { tweets, isLoading } = this.state;

    if (isLoading)
      return (
        <div className="border-r border-l border-gray-50 overflow-y-auto flex justify-center items-center mt-6">
          <div className="loading-image-container">
            <img src={Loading} alt="Loading..." className="w-8" />
          </div>
        </div>
      );

    if (!tweets.length) return <h1>No Tweets</h1>;

    return (
      <div className="twitter_tweet_list">
        <div className="flex flex-col mt-4 mb-2">
          {tweets.map((tweet) => (
            <SingleTweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    );
  }
}

export default Tweets;
