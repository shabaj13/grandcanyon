import React, { useState } from 'react'
import './navbar.css'
import { NavLink,Link } from 'react-router-dom'
import ListImg from "../Image/list.svg"
import close from "../Image/close.svg"

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navContent">
        <div className="nameDiv">
          <p className='websiteName'>GrandCanyon</p>
        </div>
        <div className="menuDiv">
          <div className="menuName">
            <NavLink className="navOpt"  activeClassName="active" to="/">Home</NavLink>
            <NavLink className="navOpt"  activeClassName="active" to="/service">Service</NavLink>
            <NavLink className="navOpt"  activeClassName="active" to="/about">About</NavLink>
            <NavLink className="navOpt"  activeClassName="active" to="/contact">Contact</NavLink>
          </div>
          <div className="menuOpt">
              <img className='menuImg' onClick={()=>{setShow(!show)}}  src={!show ? ListImg : close} alt="Menu" />   
            </div>
           {show && <div className="menulist">
              <a className="navOpt" href="/">Home</a>
            <a className="navOpt" href="/service">Service</a>
            <a className="navOpt" href="/about">About</a>
            <a className="navOpt" href="/contact">Contact</a>
              </div>}
          </div>
          </div>
      </div>
      
    </>
  )
}

export default Navbar
