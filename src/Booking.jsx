import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';


function Booking() {

const params=useParams()
const[movie,setMovie]=useState({})

useEffect(()=>{
  loadData()
},[])

let loadData=async()=>{
  let ress=await axios.get(`http://localhost:5500/getsinglemovie/${params.id}`)
  setMovie(ress.data)
}

return (   
<div className='wrapperb'>
<div className='wrapdivone'>
    <img width="80%"  height="100%" src={movie.url} alt="" />
    </div>
    <div className='wrapdivtwo text-light'>
    <h1>{movie.movie}</h1>
    <h4>Rating: {movie.rating}</h4>
    <h3>Duration: {movie.duration}</h3>
    <h3>Language: {movie.language}</h3>
    <h3>Cast: {movie.cast}</h3><br />
    <Link to="/theater" className='btn btn-danger btn-md'>Book Now ₹{movie.price}</Link>
</div> 
</div>
  )
}

export default Booking;