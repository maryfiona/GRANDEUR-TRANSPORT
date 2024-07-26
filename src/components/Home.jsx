// src/Home.jsx

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

import Truck1 from '../assets/Truck1.jpg'
import Plane from '../assets/Plane.jpg'
import Deliver from '../assets/Deliver.jpg'
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
       <marquee  direction="left" behaviour ="scroll" loop ="1"  scrolldelay ="100"  style={{ fontWeight: "bold", marginBottom: '20px' }} ><h1>Welcome to Grandeur Transport</h1></marquee>
    
      <Slider {...sliderSettings}>
        <div className="carousel-slide">
         <img src={Plane} width={350} alt="img 1" />
        </div>
        <div className="carousel-slide">
          <img src={Truck1} alt="img 2" />
        </div>
        <div className="carousel-slide">
       <img src={Deliver} alt="img 3" />
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
