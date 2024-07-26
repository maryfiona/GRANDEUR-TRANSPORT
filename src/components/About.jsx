import IMG from '../assets/Truck.jpg'
import './About.css'

const About = () => {
  return (
    <div id="about" className="about  section-spacing">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-6">
            <div className="about_right">
              <figure><img src={IMG} width={500} alt="About img" /></figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="titlepage">
              <h2>About Us</h2>
              <h4>Grandeur Transport</h4>
              <p> 

​
Grandeur transport is the leading executive transport service between the Emirates, specially catering for the daily executive commuters over the world.

 

Grandeur understands the time spent on the road can be both considerable and tiresome. We at Grandeur are determined to provide all the services on board that would help the busy executives make the best use of their time.

 

We are comitted to make your daily commute comfortable, pleasant and enjoyable... </p>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
