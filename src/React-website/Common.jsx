import React from 'react';
import { NavLink } from 'react-router-dom';
import './common.css';
const Common = (props) => {
  return (
    <>
      <div className="home">
        <div className="homeContent">    
        <div className="homeContentLeft" data-aos="fade-right">
            <p className='text1'>{ props.text}</p>
          <p className='text2'>GrandCanyon</p>
          <p className='text3'>We are team of talented developer making websites</p>
            <NavLink className='btnGo' to="/service">{ props.btn}</NavLink>
        </div>
        <div className="homeContentRight">
          <img src={props.imgsrc}  alt="random" className='homeImg' />
          </div>
          </div>
      </div>
    </>
  )
}

export default Common;
