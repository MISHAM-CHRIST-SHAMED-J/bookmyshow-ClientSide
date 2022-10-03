import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'


function Thankyou() {
  return (
    <div className='thankyou'>
        <div><img width="500px" src="https://goodluckhours.com/wp-content/uploads/2021/05/Payment-success.png" alt="" /></div>

<div><Link to="/" className="btn btn-success" >Back To Home</Link></div>
    </div>
  )
}

export default Thankyou