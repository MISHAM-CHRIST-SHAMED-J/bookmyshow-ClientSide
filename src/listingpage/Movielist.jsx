import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Movielist() {

const[data,setData]=useState([])


useEffect(()=>{
  loadData()
},[])

let loadData=async()=>{
  let res=await axios.get("http://localhost:5500/getmovies")
  console.log(res.data)
  setData(res.data)
}



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
  <h2 className="pb-4">Movies</h2>
<Carousel responsive={responsive}>

  {
    data.map((item)=>{
      return(
<div class="carddetail">
<img className="posterimg" src={item.url}  alt="..."/>
<Link to={`/booking/${item._id}`} className="btn btn-danger buttton d-flex">Book Now</Link>
</div>
      )
    })
  }


</Carousel>
 
        
    
</div>
    ) 
}

export default Movielist