import React from 'react';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TopNav = () => {
  return (
    <div className="top-nav-container">
      <div className="top-nav-item">
        <FontAwesomeIcon icon={faEnvelope} className="icon" style={{ color: '#3498db' }} />
        <a href="mailto:aguchidimmamaryfiona@gmail.com" className="custom-link">
          aguchidimmamaryfiona@gmail.com
        </a>
      </div>
      <div className="top-nav-item">
        <FontAwesomeIcon icon={faFacebook} className="icon" style={{ color: '#3b5998' }} />
        <a
          href="https://www.facebook.com/FacebookName"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          FacebookName
        </a>
      </div>
      <div className="top-nav-item">
        <FontAwesomeIcon icon={faInstagram} className="icon" style={{ color: '#e4405f' }} />
        <a
          href="https://www.instagram.com/InstagramName"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          InstagramName
        </a>
      </div>
      <div className="top-nav-item">
        <FontAwesomeIcon icon={faTwitter} className="icon" style={{ color: '#1da1f2' }} />
        <a
          href="https://twitter.com/TwitterName"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          TwitterName
        </a>
      </div>
      <div className="top-nav-item">
        <FontAwesomeIcon icon={faWhatsapp} className="icon" style={{ color: '#25d366' }} />
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="custom-link">
          +1234567890
        </a>
      </div>
    </div>
  );
};

export default TopNav;
