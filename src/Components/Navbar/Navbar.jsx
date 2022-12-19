import React from 'react'
import styled from "./Navbar.module.css"
import {Link } from "react-scroll";
import logo from "../files/IshanMehta_logo.png"

const Navbar = () => {
        const onButtonClick = () => {
                // using Java Script method to get PDF file
                fetch('Ishan_Mehta_Resume.pdf').then(response => {
                    response.blob().then(blob => {
                        // Creating new object of PDF file
                        const fileURL = window.URL.createObjectURL(blob);
                        // Setting various property values
                        let alink = document.createElement('a');
                        alink.href = fileURL;
                        alink.download = 'Ishan_Mehta_Resume.pdf';
                        alink.click();
                    })
                })
            } 
  return (
    <div className={styled.main}>
        
 <div className={styled.flex}>

 <div className={styled.left}>
      <Link to="Home" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>

                <img className={styled.logo} src={logo}></img>
              </Link>
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
              onClick={onButtonClick}
              className={styled.left}>
               Resume
                </Link>
      </div>
     
    </div>
    </div>
  )
}

export default Navbar
