import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            lajksdf asldfkj aklsdjf kasdj flkj sjdklfg skldfjg lkjsf lkdsjf
            glksjfd gsklfdgjl lkdfj g lksfd jg skldfj sdkfjg lksjdf g kdfjg
            lksjfdg lksjdf g
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            lajksdf asldfkj aklsdjf kasdj flkj sjdklfg skldfjg lkjsf lkdsjf
            glksjfd gsklfdgjl lkdfj g lksfd jg skldfj sdkfjg lksjdf g kdfjg
            lksjfdg lksjdf g
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Laxmi Creations</span>
        </div>
        <div className="right">
          <span className="copy">Copyright 2023.All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
