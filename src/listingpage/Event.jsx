import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Event() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
<div className='container-fluid p-4'>
  <h2 className="pb-4">Event</h2>
<Carousel responsive={responsive}>
<div class="carddetail">
<img className="posterimg" src="https://www.knowafest.com/files/uploads/WhatsApp%20Image%202022-05-25%20at%205.37.27%20PM-2022052601.jpeg"  alt="..."/>
<a href="" className="btn btn text-danger buttton d-flex">Till Oct 05 2022</a>
</div>
<div class="carddetail">
<img className="posterimg" src="https://www.knowafest.com/files/uploads/Fest%20O%20Comm%20Final-2022042607.jpg"  alt="..."/>
<a href="" className="btn btn- buttton d-flex">Till Oct 12 2022</a>
</div>
<div class="carddetail">
<img className="posterimg" src="https://www.knowafest.com/files/uploads/Fest%20O%20Comm%20Final-2022042607.jpg"  alt="..."/>
<a href="" className="btn btn- buttton d-flex">Till Oct 16 2022</a>
</div>
<div class="carddetail">
<img className="posterimg" src="http://robotics.srec.ac.in/robotics_admin/resource/uploads/src/V4vtEm0IHP02052022112604raa-symposium-2022page-0001.jpg"  alt="..."/>
<a href="" className="btn btn- buttton d-flex">Till Oct 20 2022</a>
</div>
<div class="carddetail">
<img className="posterimg" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-glossy-music-event-poster-design-template-84d38a706368baec17981e71a5e5810d_screen.jpg?ts=1636991393"  alt="..."/>
<a href="" className="btn btn- buttton d-flex">Till Oct 25 2022</a>
</div>


</Carousel>;
 
        
    
</div>
    ) 
}

export default Event