import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Sport() {
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
  <h2 className="pb-4">Sport</h2>
<Carousel responsive={responsive}>
<div class="card kip bg-dark" style={{width: "18rem",height:"20rem"}}>
  <a href="">  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5992f686581049.5d9ddc14142dc.jpg" class="card-img-top" alt="..."/>
</a>
  <span className="text-light text-center p-1">Subscribe @350 / Month</span>

</div>
<div class="card bg-dark" style={{width: "18rem",height:"20rem"}}>
  <a href="">  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/22072086581049.5d9ddc10c3d11.jpg" class="card-img-top" alt="..."/>
</a>
  <span className="text-light text-center p-1">Subscribe @350 / Month</span>

</div>
<div class="card bg-dark" style={{width: "18rem",height:"20rem"}}>
  <a href="">  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d8a25d86581049.5d9ddc113133e.jpg" class="card-img-top" alt="..."/>
</a>
  <span className="text-light text-center p-1">Subscribe @350 / Month</span>

</div>
<div class="card bg-dark" style={{width: "18rem",height:"20rem"}}>
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d319de86581049.5d9ddc141717b.jpg" class="card-img-top" alt="..."/>
  <span className="text-light text-center p-1">Subscribe @350 / Month</span>

</div>
<div class="card bg-dark" style={{width: "18rem",height:"20rem"}}>
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/92942186581049.5d9ddc1415484.jpg" class="card-img-top" alt="..."/>
  <span className="text-light text-center p-1">Subscribe @350 / Month</span>
</div>
</Carousel>
 
        
    
</div>
    ) 
}

export default Sport