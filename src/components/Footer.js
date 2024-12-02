import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-[40px]">
      <div className="container flex justify-between py-[20px] border-b-2 border-t-2 border-[#FFFFFF33] max-sm:flex-col max-sm:gap-5">
        <div className="flex items-start gap-[50px] max-sm:flex-col max-sm:items-start max-sm:gap-5">
          <img
            src={require("../assets/images/logo.png")}
            alt="Logo"
            className="h-10"
          />
          <div>
            <h4 className="font-bold text-[20px]">Company</h4>
            <ul className="px-0">
              <li>
                <a href="/" className="text-white no-underline">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[20px]">Terms</h4>
            <ul className="px-0">
              <li>
                <a href="/" className="text-white no-underline">
                  Data Privacy
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[20px]">Related</h4>
            <ul className="px-0">
              <li>
                <a href="/" className="text-white no-underline">
                  Find Buyer
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/fb.png")}
              alt="Facebook"
              className="w-[40px]"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/ig.png")}
              alt="Instagram"
              className="w-[40px]"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/li.png")}
              alt="LinkedIn"
              className="w-[40px]"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/tw.png")}
              alt="Twitter"
              className="w-[40px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
