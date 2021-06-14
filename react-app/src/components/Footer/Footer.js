import React from "react";

function Footer() {
  return (
    <div className="flex items-center py-2" style={{backgroundColor: "#666666"}}>
      <div className="pl-16">
        <a href="https://www.linkedin.com/in/hye-kim/">
          <i className="fab fa-linkedin-in text-white text-4xl"></i>
        </a>
      </div>
      <div className="pl-12">
        <a href="https://github.com/hye-kim/moodia">
          <i className="fab fa-github text-white text-4xl"></i>
        </a>
      </div>
      <div className="pl-12">
        <a href="https://hyekim.me/">
          <i className="fas fa-user text-white text-4xl"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
