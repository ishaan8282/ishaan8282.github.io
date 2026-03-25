import React, { useState } from 'react'
import styled from "./Navbar.module.css"
import { Link } from "react-scroll"
import logo from "../files/IshanMehta_logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const onButtonClick = () => {
    fetch('Ishan_Mehta_Resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Ishan_Mehta_Resume.pdf'
        alink.click()
      })
    })
  }

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { to: "intro",   label: "About"   },
    { to: "skills",  label: "Skills"  },
    { to: "project", label: "Project" },
    { to: "contact", label: "Contact" },
  ]

  const scrollProps = {
    hashSpy: true,
    spy: true,
    smooth: true,
    delay: 100,
    duration: 500,
  }

  return (
    <nav className={styled.main}>
      <div className={styled.flex}>

        {/* Logo */}
        <Link to="Home" {...scrollProps} className={styled.logoWrapper}>
          <img className={styled.logo} src={logo} alt="Ishan Mehta logo" />
        </Link>

        {/* Desktop nav */}
        <ul className={styled.navLinks}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} {...scrollProps} className={styled.navItem}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button className={styled.resumeBtn} onClick={onButtonClick}>
              <span>Resume</span>
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`${styled.hamburger} ${menuOpen ? styled.open : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styled.mobileMenu}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} {...scrollProps} className={styled.navItem} onClick={closeMenu}>
              {label}
            </Link>
          ))}
          <button className={styled.resumeBtn} onClick={() => { onButtonClick(); closeMenu() }}>
            <span>Resume</span>
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar