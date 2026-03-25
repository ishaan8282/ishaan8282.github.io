import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import styled from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={styled.fix}>
      <a
        className={styled.iconLink}
        href="https://github.com/ishaan8282"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <AiFillGithub className={styled.icon} />
      </a>

      {/* thin divider between icons on mobile */}
      <span className={styled.divider} />

      <a
        className={styled.iconLink}
        href="https://www.linkedin.com/in/ishan-mehta-948a83222/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <AiFillLinkedin className={styled.icon} />
      </a>

    </div>
  )
}

export default SideBar