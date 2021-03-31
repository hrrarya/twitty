import React, { Component } from "react";

class Extra extends Component {
  render() {
    return (
      <div className="lg:w-1/4 px-2">
        <div className="twitter_search">
          <form>
            <div>
              <input
                type="text"
                name="search"
                className="w-full border-2 border-gray-300 rounded p-2"
                placeholder="Search Twitter"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Extra;
