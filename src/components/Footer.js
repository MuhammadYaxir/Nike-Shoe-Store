import React from "react";
import "./../App.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p className="footer-para">
              Developer: <span className="my-name"> Muhammad Yasir</span>
            </p>

            <div className="contact"></div>
            
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp;Nike Shoes Template
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
