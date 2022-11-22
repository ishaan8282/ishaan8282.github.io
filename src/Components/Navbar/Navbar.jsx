import React from 'react'
import styled from "./Navbar.module.css"
import {Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className={styled.main}>
        
 <div className={styled.flex}>

 <div className={styled.left}>
      <Link to="Home" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Home</Link>
      </div>
      
      <div className={styled.left}>
      <Link to="intro" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>About</Link>
      </div>
      <div className={styled.left}>
      <Link to="skills" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Skills</Link>
      </div>
      <div className={styled.left}>
      <Link to="project" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Project</Link>
      </div>
      <div className={styled.left}>
     <Link to="contact" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Contact</Link>
      </div>
      <div className={styled.left}>
      <Link to="resume" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Resume</Link>
      </div>
     
    </div>
    </div>
  )
}

export default Navbar
