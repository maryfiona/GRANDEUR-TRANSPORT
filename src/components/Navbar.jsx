import './Style.css'
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTools, faEnvelope , faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// Use the URL of your online logo
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
  
          <div className="collapse navbar-collapse" style={{ marginLeft: '15rem', color: 'white' }} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} className="mr-1" style={{ color: '#3498db' }} /> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faInfoCircle} className="fa-fw mr-1" style={{ color: '#e74c3c' }} /> About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  <FontAwesomeIcon icon={faTools} className="fa-fw mr-1" style={{ color: '#27ae60' }} /> Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-fw mr-1  "  style={{ color: '#f39c12' }} /> Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/BookingForm">
                  <FontAwesomeIcon icon={faShoppingCart} className="fa-fw mr-1  "  style={{ color: '#f39c12' }} /> Book Now
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
   
  );
};

export default Navbar;
