import React, { useState } from 'react';
import valvelogo from '../Images/valvelogo.png';
import { Link } from 'react-router-dom';
import FooterParagraph from './FooterParagraph.json';

const Footer = () => {
  const [infoData, setInfoData] = useState(FooterParagraph);

  return (
    <div className="footerall">
      <div className="footer">
        <img src={valvelogo} alt="" />
        {infoData && <p>{infoData.info}</p>}
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
