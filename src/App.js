import './App.css';
import Curosel from './listingpage/Curosel';
import Entertain from './listingpage/Entertainment';
import Hollywood from './listingpage/Hollywood';
import Movielist from './listingpage/Movielist';
import Navbar from './listingpage/Navbar';
import Sport from './listingpage/Sports';
import Event from './listingpage/Event';
import Contact from './listingpage/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portal from './Portal';
import Login from './Login';
import Booking from './Booking';
import Pagenot from './Pagenot';
import Theater from './Theater';
import Thankyou from './Thankyou';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Portal />}/>
      <Route path="/booking/:id" element={< Booking/>}/>
      <Route path="/theater" element={< Theater/>}/>
      <Route path="/thankyou" element={< Thankyou/>}/>

      <Route path="*" element={< Pagenot/>}/>
    </Routes>
  </BrowserRouter>
     
      
   
  );
}

export default App;
