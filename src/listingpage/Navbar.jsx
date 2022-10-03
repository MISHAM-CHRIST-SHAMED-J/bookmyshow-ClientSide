import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
<nav class="navbar navbar-expand-lg ">
  <div class="container">
    <Link class="navbar-brand" to="/"><span className='navlogo'>BookMyShow</span></Link>
    
    <Link to="/login" className='btn bttn btn-primary'>Login</Link>
  </div>
</nav>
  )
}

export default Navbar;