import React from 'react'
import valvelogo from '../Images/valvelogo.png'

const Footer = () => {
  return (
    <div className="footer">
        <img src={valvelogo} alt="" />
        <p className='text-white'>© 2023 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. <br/>
VAT included in all prices where applicable.</p>
    </div>
  )
}

export default Footer