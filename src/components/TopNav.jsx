// src/Navbar.jsx
import './Style.css';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTools, faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const logoUrl = 'https://static.wixstatic.com/media/170045_2dc6bcf5c7df43c79a49f31dca3c0e6d.png/v1/fill/w_218,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/170045_2dc6bcf5c7df43c79a49f31dca3c0e6d.png';

const Navbar = () => {
  return (
    <div>
      <TopNav />
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logoUrl} alt="GRANDEUR-TRUCK Logo" />
          </Link>
  
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  <FontAwesomeIcon icon={faTools} className="mr-1" /> Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/BookingForm">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-1" /> Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
