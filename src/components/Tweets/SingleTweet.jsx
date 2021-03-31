import React from "react";

const SingleTweet = (props) => {
  const {
    id,
    fullname,
    username,
    middlename,
    profile_pic,
    tweet_time,
    tweet_des,
  } = props.tweet;
  return (
    <div id={id} className="flex">
      <div>
        <a href="#">
          <img
            src={
              profile_pic ||
              "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            }
            alt="profile"
            className="h-12 w-12 rounded-full"
          />
        </a>
      </div>
      <div className="flex-1 px-2 my-2">
        <div className="flex justify-between">
          <h3 className="text-gray-800">
            {fullname} {middlename && `(${middlename})`}{" "}
            <span className="text-sm">
              <a href="#" className="hover:underline">
                @{username}
              </a>{" "}
              {tweet_time}
            </span>
          </h3>
          <span>
            <i className="fa fa-chevron-down" />
          </span>
        </div>
        <div
          className="text-sm mt-2"
          dangerouslySetInnerHTML={{ __html: tweet_des }}
        />
        {/* <img
                      src="https://image.freepik.com/free-psd/3d-rendering-new-year-2021-covid-vaccine-concept-wooden-cubes_154993-732.jpg"
                      alt="post"
                      className="rounded h-64 w-11/12 p-2 m-4 shadow"
                    /> */}
        <div className="comment mt-8">
          <a href="#">
            <i className="fa fa-comments fa-lg" />
          </a>
          <a href="#">
            <i className="fas fa-sync" />
          </a>
          <a href="#">
            <i className="fa fa-heart" />
          </a>
          <a href="#">
            <i className="fa fa-envelope" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleTweet;
