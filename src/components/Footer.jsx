import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faHome, faInfoCircle, faTools, faEnvelope , faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container my-5">
      <footer className="text-center text-white" style={{ backgroundColor: '#007FFF' }}>
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} className="mr-1" style={{ color: '#00308F' }} /> Home
                </Link>
              </div>
              <div className="col-md-2">
                <Link className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faInfoCircle} className="fa-fw mr-1" style={{ color: '#e74c3c' }} /> About
                </Link>
              </div>
              <div className="col-md-2">
                <Link className="nav-link" to="/service">
                  <FontAwesomeIcon icon={faTools} className="fa-fw mr-1" style={{ color: '#66FF00' }} /> Services
                </Link>
              </div>
              <div className="col-md-2">
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-fw mr-1" style={{ color: '#f39c12' }} /> Contact
                </Link>
              </div>
              <div className="col-md-2">
                <Link className="nav-link" to="/BookingForm">
                  <FontAwesomeIcon icon={faShoppingCart} className="fa-fw mr-1" style={{ color: '#f39c12' }} /> Book Now
                </Link>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Grandeur transport is the leading executive transport service between the Emirates,
                  specially catering for the daily executive commuters over the world.
                  Grandeur understands the time spent on the road can be both considerable and tiresome.
                  We at Grandeur are determined to provide all the services on board that would help the busy executives
                  make the best use of their time.
                  We are committed to make your daily commute comfortable, pleasant and enjoyable...
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-5">
            <a href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className="text-white" href="/">FioCodeTech</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
