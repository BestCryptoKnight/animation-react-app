import React from "react";
import { Link } from 'react-router-dom';

import '../gutter.css';

function Gutter() {
  return (
    <div className="footer-footer">
    <div className="footer-menu">
      <span className="footer-text">
        <Link to={'/privacy-policy'}><span>Privacy Policy</span></Link>
      </span>
      <span className="footer-text2">
        <span>© 2023 MINEMARKETING ALL RIGHTS RESERVED</span>
      </span>
      <span className="footer-text4">
      <Link to={'/terms-conditions'}><span>TERMS &amp; Conditions</span></Link>  
      </span>
    </div>
  </div>
  )
}

export default Gutter;