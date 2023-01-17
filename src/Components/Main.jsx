import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Email from './Email/Email'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Project from './Project/Project'
import Resume from './Resume/Resume'
import SideBar from './Sidebar/SideBar'
import Skills from './Skills/Skills'
import Calendar from "./GithubCalendar/Calendar"

const Main = () => {
  return (
    
    <>
      <Navbar/>
      <SideBar/>  
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Resume/>
      <Calendar/>
      <Contact/>
      <Email/>
      
    </>
  )
}

export default Main
