import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hollywood() {
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
  <h2 className="pb-4">Hollywood</h2>
<Carousel responsive={responsive}>
<div class="carddetail">
<img className="posterimg" src="https://rukminim1.flixcart.com/image/416/416/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=70"  alt="..."/>
<a href="" className="btn btn-danger buttton d-flex">Book Now</a>
</div>

<div class="carddetail">
<img className="posterimg" src="https://c8.alamy.com/comp/2AGAWRY/the-witcher-poster-2019-credit-netflix-the-hollywood-archive-2AGAWRY.jpg"  alt="..."/>
<a href="" className="btn btn-danger buttton d-flex">Book Now</a>
</div>
<div class="carddetail">
<img className="posterimg" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054"  alt="..."/>
<a href="" className="btn btn-danger buttton d-flex">Book Now</a>
</div>
<div class="carddetail">
<img className="posterimg" src="https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"  alt="..."/>
<a href="" className="btn btn-danger buttton d-flex">Book Now</a>
</div>
<div class="carddetail">
<img className="posterimg" src="https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_1f3f78b1-3366-4394-a8b2-4d8431592dac.jpg?v=1579504957"  alt="..."/>
<a href="" className="btn btn-danger buttton d-flex">Book Now</a>
</div>
<div class="carddetail">
<img className="posterimg" src="https://w0.peakpx.com/wallpaper/196/795/HD-wallpaper-justice-league-sc-action-dc-hbo-hollywood-justice-league-movie-poster-warner-warner-bros.jpg"  alt="..."/>
<a href="" className="btn btn-danger buttton d-flex">Book Now</a>
</div><div class="carddetail">
<img className="posterimg" src="http://images6.fanpop.com/image/photos/40000000/X-Men-Apocalypse-Movie-Poster-movie-trailers-40092364-504-749.jpg"  alt="..."/>
<a href="" className="btn btn-danger buttton d-flex">Book Now</a>
</div>


</Carousel>;
 
        
    
</div>
    ) 
}

export default Hollywood