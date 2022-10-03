import React from 'react'
import Entertain from './listingpage/Entertainment';
import Hollywood from './listingpage/Hollywood';
import Movielist from './listingpage/Movielist';
import Sport from './listingpage/Sports';
import Event from './listingpage/Event';
import Contact from './listingpage/Contact';
import Curosel from './listingpage/Curosel';
import { Outlet } from "react-router-dom";

function Portal() {
  return (
    <>
    <Curosel></Curosel>
    <Movielist></Movielist>
    <Entertain></Entertain>
    <Hollywood></Hollywood>
    <Event></Event>
    <Sport></Sport>
    <Contact></Contact>
    <Outlet />
    </>
  )
}

export default Portal