// Vehicle.jsx

import './Vehicle.css'; // Import your CSS file
import Truck1 from '../assets/Truck1.jpg';
import Truck2 from '../assets/Truck2.jpg';
import Plane from '../assets/Plane.jpg'

const Vehicle = () => {
  return (
    <section id="vehicles" className="vehicles">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Our Vehicles</h2>
              <p>Internet. It uses a dictionary of over 200 Latin words, combined with.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="veh" className="carousel slide" data-ride="carousel">
      
        <div className="carousel-inner">
    
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src={Truck1} alt="Truck 1" /></figure>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src={Truck2} alt="Truck 2" /></figure>
                    
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vehicles_truck">
                      <figure><img src={Plane} alt="Truck 3" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
     
    </section>
  );
};

export default Vehicle;
