import React from 'react';
import './Footer.css';
import logo from '../../../assets/logo-white.svg';
import facebookLogo from '../../../assets/icon-facebook.svg';
import twitterLogo from '../../../assets/icon-twitter.svg';
import pinterestLogo from '../../../assets/icon-pinterest.svg';
import instagramLogo from '../../../assets/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" />

      <div>
        <span className="footerSpan_heading">Features</span>
        <span className="footerSpan_subHeading">Link shortening</span>
        <span className="footerSpan_subHeading">Branded Links</span>
        <span className="footerSpan_subHeading">Analytics</span>
      </div>
      <div>
        <span className="footerSpan_heading">Resources</span>
        <span className="footerSpan_subHeading">Blog</span>
        <span className="footerSpan_subHeading">Developers</span>
        <span className="footerSpan_subHeading">Support</span>
      </div>
      <div>
        <span className="footerSpan_heading">Company</span>
        <span className="footerSpan_subHeading">About</span>
        <span className="footerSpan_subHeading">Our Team</span>
        <span className="footerSpan_subHeading">Careers</span>
        <span className="footerSpan_subHeading">Contact</span>
      </div>
      <div className="footerIcon_container">
        <img src={facebookLogo} alt="facebook" />
        <img src={twitterLogo} alt="twitter" />
        <img src={pinterestLogo} alt="pinterest" />
        <img src={instagramLogo} alt="instagram" />
      </div>
    </footer>
  );
}
