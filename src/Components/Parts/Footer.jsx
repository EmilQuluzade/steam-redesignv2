import React from 'react';
import valvelogo from '../Images/valvelogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerall">
      <div className="footer">
        <img src={valvelogo} alt="" />
        <p className='text-white'>© 2023 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. <br/>
          VAT included in all prices where applicable.</p>
      </div>
      <div className="footerlinks">
        <Link className='links' to="/privacy">Privacy Policy</Link>
        <Link className='links' to="/legal">LEGAL</Link>
        <Link className='links' to="/refunds">REFUNDS</Link>
      </div>
    </div>
  );
};

export default Footer;
