import React, { useState } from 'react'
import './Navbar.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';

function Navbar() {
  const[isMenuOpen,setisMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <Router>
    <nav className='navbar-container'>
        
        
        <div>Website</div> 

        <div className='menu' onClick={toggleMenu}>
          <div className='menu-icon'></div>
           <div className='menu-icon'></div>
            <div className='menu-icon'></div>
        </div>
        <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
          <li><NavLink to='/' onClick={toggleMenu}>Home</NavLink></li>
           <li><NavLink to='About' onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to='/Service' onClick={toggleMenu}>Service</NavLink></li>
             <li><NavLink to='/Contact' onClick={toggleMenu}>Contact</NavLink></li>
          
        </ul>
          </nav>
           <Routes>
            <Route path='/' element={<Home/>}/>
             <Route path='/About' element={<About/>}/>
              <Route path='/Service' element={<Service/>}/>
             <Route path='/Contact' element={<Contact/>}/>


          </Routes>
          </Router>
         
  )
}

export default Navbar