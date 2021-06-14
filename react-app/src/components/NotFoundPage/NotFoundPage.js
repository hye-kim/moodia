import React from "react";
import "./NotFoundPage.css";

function NotFoundPage({ user }) {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-auto flex-nowrap overflow-auto justify-center items-center">
        <div className="relative">
          <img
            src="https://moodia.s3.amazonaws.com/43d6b27ccf7d46e4a256df6fa5b0c32c.png"
            alt="cow"
          />
        </div>
        <div className="pl-4">
          <div className="max-w-lg">
            <div
              className="font-bold relative inline-block glitch"
              data-text="404"
            >
              404
            </div>
          </div>
          <div className="font-bold text-2xl leading-10 text-gray-500 m-2">
            IT'S OKAY TO BE LOST!
          </div>
          <div className="text-xl text-left text-gray-400">
            Unfortunately, you seem to have reached a page with no content!
            Click the link below to go back home.
          </div>
          <div className="mt-5">
            <a
              href={`${user ? "/dashboard" : "/"}`}
              className="not-found-links"
            >
              HOME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
