import React from 'react';
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
            <TiSocialInstagram/><TiSocialFacebook/><TiSocialTwitter/><TiSocialLinkedin/>
        </div>
        <p>&copy; 2022 MoloPizza.co.za</p>
    </div>
  )
}

export default Footer