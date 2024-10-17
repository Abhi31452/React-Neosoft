import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HeaderL() {
  return (
    <>
    <div className="container">
      <h2>Chinese.......</h2>  
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
                 src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                 alt="First slide" 
              style={{ height: "450px", width: "100%" }} 
            />
          </div>

          <div className="carousel-item">
            <img 
              src="https://www.theleela.com/prod/content/assets/styles/aio_banner_image_webp/public/aio-banner/dekstop/the-great-wall-chinese-restaurant-mumbai.jpg.webp?VersionId=_XdqlqeDxN4fiLDqDzthBzKqQHce0J5b&itok=tGgdogRF" 
              alt="Second slide" 
           
              style={{ height: "450px" ,width: "100%" }} 
            />
          </div>
        
          <div className="carousel-item">
            <img 
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Third slide" 
              style={{ height: "450px",  width: "100%" }} 
            />
          </div>
        </div>

        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
      <br />
      <div className="border-top-0">
        <div className='text-center h2 p-3' style={{ fontFamily: "serif" }}>Chinese Speciality Restaurant</div>
        <br />
        <div className='container h5' style={{ whiteSpace: 'pre-wrap', fontFamily: "fantasy" }}>
          Authentic Chinese and Cantonese cuisine finds a tasteful home at The Great Wall...
          <br />
          Enjoy our weekday Express Lunch...
        </div>
        <div className='text-center h5' style={{ whiteSpace: 'pre-wrap', fontFamily: "fantasy" }}>
          Restaurant details
          <br />
          Location: Lower Lobby Level <br />
          Restaurant timings
          <br />
          Lunch: 12:30 pm to 3:00 pm
          <br />
          Dinner: 7:00 pm to 12:00 am
          <br />
          For table reservations, please call <a className='text-info'>+91 (22) 66911347 | +91 (22) 66911348</a>
        </div>
      </div>
    </>
  );
}

export default HeaderL;
