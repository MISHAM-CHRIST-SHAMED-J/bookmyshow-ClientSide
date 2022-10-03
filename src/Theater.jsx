import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

function Theater() {

  const[seat,setSeat]=useState([])

  useEffect(()=>{
    loadSeat()
  },[])

  let loadSeat=async()=>{
    let res=await axios.get("http://localhost:5500/getseat")
    setSeat(res.data)
  }

const[cart,setCart]=useState([])

  let addToCart = (item)=>{
    setCart([...cart,item])

  }

  return (
    <div className="wrapper458">
    <div className='inside d-flex flex-wrap'>
{
  seat.map((item)=>{
    return(
<button disabled={cart.some((obj)=>obj._id==item._id)} onClick={()=>{addToCart(item)}}  className='m-1'>{item.seat}</button>

    )
  })
}

    </div>
   <div>
    <div className='outside'>
{
  cart.map((item)=>{
    return(
      <h3>{item.seat} booked</h3>
    )
  })
}
    </div>
    <div>
  <Link to="/thankyou" className='btn btn-secondary  w-100'>Proceed To Pay</Link>
</div>
</div>
    </div>
   
  )
}

export default Theater