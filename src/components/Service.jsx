
import './Service.css'
import  court from '../assets/court.png'

const Service = () => {
  return (
    <div className='section-spacing'>
       <div id="service" className="service">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="titlepage">
              <h2>Our Services</h2>
              <p>
Grandeur Transport is not just a transportation company, it is a life style.
 Many of the services on board of the vehicle are designed and tailored to meet the requirements of the busy executives commuters and to make sure the time spent on the ride is well utilized. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="service_main">
              
             
            <div className="service_box bla_colo text-center">
  <i className="d-flex ">
    <img src={court} alt="court img" className="img-fluid" />
  </i>
  <h4> COURIER SERVICES</h4>
</div>

             
            
            </div>
          </div>
          
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Service
