import React, { useState } from 'react'
import './Navbar.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/about/About';
import Service from './Pages/services/Service';
import Contact from './Pages/contact/Contact';
import Blog from './Pages/blog/Blog';


function Navbar() {
  const[isMenuOpen,setisMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <Router>
      <header>
       <div className='container flex'>
        
        
          <div className='logo'>
         <img src='../images/logo.png' alt='' />

          </div>
         <div className='nav'>
        <div className='menu' onClick={toggleMenu}>
          <div className='menu-icon'></div>
           <div className='menu-icon'></div>
            <div className='menu-icon'></div>
        </div>
        <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
          <li><NavLink to='/' onClick={toggleMenu}>Home</NavLink></li>
           <li><NavLink to='About' onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to='/Service' onClick={toggleMenu}>Service</NavLink></li>
             <li><NavLink to='/Blog' onClick={toggleMenu}>Blog</NavLink></li>
             <li><NavLink to='/Contact' onClick={toggleMenu}>Contact</NavLink></li>
          
        </ul>
        </div>
                  <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>
          </div>
          </header>
           <Routes>
            <Route path='/' element={<Home/>}/>
             <Route path='/About' element={<About/>}/>
              <Route path='/Service' element={<Service/>}/>
               <Route path='/Blog' element={<Blog/>}/>
             <Route path='/Contact' element={<Contact/>}/>


          </Routes>
          </Router>
         
  )
}

export default Navbar