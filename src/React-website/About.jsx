import React from 'react'
import Common from './Common'
import AboutImg from "../Image/developer-team.svg"

const About = () => {
  return (
    <>
      <Common 
        text="Welcome to About Page"
        btn="Contact Here"
        imgsrc={AboutImg}
     />
    </>
  )
}

export default About
