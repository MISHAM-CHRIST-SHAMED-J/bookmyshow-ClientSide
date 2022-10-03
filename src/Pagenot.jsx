import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";




function Pagenot() {
  return (
    <>
    <div className='d-flex justify-content-center align-item-center mt-5 pt-5'><h1>Page Not Found</h1>
   
    </div>
    <div className='d-flex justify-content-center align-item-center'>
     <Link className='btn btn-danger text-center  ' to="/">Home</Link>
     </div>
     </>
  )
}

export default Pagenot