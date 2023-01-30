import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../content.css";

const Partners = () => {

  return (
    <div className="content-section-partners">
      <div className="content-text">
        <span className="content-text01">
          <span className="footer-title">Some Of our partners</span>
        </span>
      </div>
      <div className="content-logo-slide">
        <Marquee gradient={false} speed={100}>
          <img src="/logos/Frame.png" alt="1" style={{ marginLeft: '50px' }} />
          <img src="/logos/Frame-1.png" alt="1" />
          <img src="/logos/Frame-2.png" alt="1" />
          <img src="/logos/Frame-3.png" alt="1" />
          <img src="/logos/Frame-4.png" alt="1" />
          <img src="/logos/Frame-5.png" alt="1" />
          <img src="/logos/Frame-6.png" alt="1" />
          <img src="/logos/Frame.png" alt="1" />
          <img src="/logos/Frame-1.png" alt="1" />
          <img src="/logos/Frame-2.png" alt="1" />
          <img src="/logos/Frame-3.png" alt="1" />
          <img src="/logos/Frame-4.png" alt="1" />
          <img src="/logos/Frame-5.png" alt="1" />
        </Marquee>
      </div>

      {/* <div className="divider" align="center"></div> */}

      <img
        src="/footer/assets/playground_assets/divider2357-2za.svg"
        alt="Divider2357"
        className="content-divider"
      />
    </div>
  );
};

export default Partners;
