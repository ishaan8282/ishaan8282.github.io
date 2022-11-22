import React from 'react'
import { AiFillGithub,AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import styled from './SideBar.module.css'
const SideBar = () => {
  return (
    <div className={styled.fix}>
          <a
              className={styled.color3}
              href="https://github.com/ishaan8282"
            >
              <AiFillGithub className={styled.color1}/><br/>
            </a>
            
             <a
              className={styled.color3}
              href="https://www.linkedin.com/in/ishan-mehta-948a83222/"
            >
              <AiFillLinkedin className={styled.color}/><br/>
            </a>    
    
    </div>
  )
}

export default SideBar
