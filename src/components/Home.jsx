
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

import Truck1 from '../assets/Truck1.jpg';
import Plane from '../assets/Plane.jpg';
import Deliver from '../assets/Deliver.jpg';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import BookingForm from './BookingForm';
import Vehicle from './Vehicle';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="landing-page">
      <div className="scrolling-text">
        <h1>Welcome to Grandeur Transport</h1>
      </div>

      <Slider {...sliderSettings}>
        <div className="carousel-slide">
          <img src={Plane} width={350} alt="Plane" />
        </div>
        <div className="carousel-slide">
          <img src={Truck1} alt="Truck" />
        </div>
        <div className="carousel-slide">
          <img src={Deliver} alt="Delivery" />
        </div>
      </Slider>
      <About />
      <Service />
      <Vehicle />
      <Contact />
      <BookingForm />
    </div>
  );
};

export default Home;
