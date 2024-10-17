import './Carousel.css'

export function Carousel(){
    return (
        <>
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner bgcol">
          <div className="carousel-item active d-flex justify-content-center align-items-center ">
            {/* horizontal : d-flex justify-content-center  */}
            <div className="container">
              <div className=" row ">
                <div className="col">
                <img src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" className="d-block w-75 rounded-pill mx-auto img"  alt="..."/>
                </div>
      
                 <div className="col">
                <img src="https://images.unsplash.com/photo-1576267423429-569309b31e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" className="d-block w-75 rounded-pill mx-auto img" alt="..."/>
                 </div>
      
                 <div className="col ">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVtcGxveWVlfGVufDB8fDB8fHww" className="d-block w-75 rounded-pill mx-auto img" alt="..."/>
                 </div>
              </div>
            </div>
          </div>
          <div className="carousel-item d-flex justify-content-center align-items-center ">
          <div className="container">
              <div className=" row ">
                <div className="col">
                <img src="https://media.istockphoto.com/id/2017852880/video/young-adult-asian-businesswoman-work-late-together-with-coworker-at-night-in-sustainable.jpg?s=640x640&k=20&c=OvufgjpQuW8gonv3-9OFs-CJzCFLGqfzDjP-7rJyikU="className="d-block w-75 rounded-pill mx-auto img"   alt="..."/>
                 </div>
      
                 <div className="col">
                <img src="https://media.istockphoto.com/id/2157146316/video/mature-supervisor-promoting-a-team-member-at-an-industrial-bakery.jpg?s=640x640&k=20&c=WlYk5lO1Ua4PIXTiBwR3X_i1o-8JKdU36c4zpNqEfbI=" className="d-block w-75 rounded-pill mx-auto img"alt="..."/>
                 </div>
      
                 <div className="col">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVtcGxveWVlfGVufDB8fDB8fHww" className="d-block w-75 rounded-pill mx-auto img" alt="..."/>
                 </div>
              </div>
          </div>
          </div>
          <div className="carousel-item d-flex  align-items-center ">
          <div className="container">
              <div className=" row ">
                <div className="col">
                <img  className="justify-content-center" src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" className="d-block w-75 rounded-pill "  alt="..."/>
                 </div>
      
                 <div className="col">
                <img src="https://images.unsplash.com/photo-1576267423429-569309b31e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" className="d-block w-75 rounded-pill " alt="..."/>
                 </div>
      
                 <div className="col ">
                <img src="https://media.istockphoto.com/id/2157146316/video/mature-supervisor-promoting-a-team-member-at-an-industrial-bakery.jpg?s=640x640&k=20&c=WlYk5lO1Ua4PIXTiBwR3X_i1o-8JKdU36c4zpNqEfbI=" className="d-block w-75 rounded-pill " alt="..."/>
                 </div>
              </div>
              </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-info " aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-info" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      
        
        </>
    );
}

export default Carousel;
