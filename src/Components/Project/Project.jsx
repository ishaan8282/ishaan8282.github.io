import React, { useState } from 'react'
import styled from './Project.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import apollo from "../files/apollo_Banner.jpg"
import appletv from "../files/Appletv.jpg"
import Airgarage from "../files/Airgarage.jpg"
import TimeTrack from "../files/Time Tracking.jpg"
import Modal from 'react-modal'
const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  return (
    <div id="project">
      <h1 className={styled.mid}>Projects</h1>
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src={apollo}
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Apollo-24/7-Project</h2>
          <div className={styled.box}>
            <p>
            Apollo 24|7 is a single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home.
              <p className={styled.blue} onClick={() => setIsOpen(true)}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen}>
            <button onClick={() => setIsOpen(false)} className={styled.btn}>
                Close
              </button>
              <h1>Apollo-24/7-Project</h1>
              
              <p>
              Apollo 24|7 is a single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home.
              </p>
              <p>
                <h3>
                  {' '}
                  Tech Stack: HTML, CSS, JavaScript, JSON-Server
                </h3>
                A collaborative project in 5 days with 4 people
                <br />
                Roles & Responsibility:  <br />
                1. A user can sign in and sign up. <br />
                2. A user can Add items from the Product Page and search for items. (Note: you have to run json server and only specific items can be searched those are in database files). <br />
                3. Cart Page. <br />
                4. Payment Page. On payment page button like PAY RS and VERIFY AND PAY will be disabled untill you didn't fill detail. After that you can proceed further. <br />
              </p>
             
            </Modal>
          </div>
          <h5>HTML || CSS || JavaScript || JSON-Server</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/rameshmane7218/apollo-Project.git"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://beautiful-liger-b337d8.netlify.app/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>


         {/* ----project2 */}
         <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src={appletv}
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Apple-TV</h2>
          <div className={styled.box}>
            <p>

         An individual project where I have Created a clone of an entertainment purpose App on which
users can enjoy watching TV shows, movies, and web series.
              <p onClick={() => setIsOpen2(true)}  className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen2}>
            <button onClick={() => setIsOpen2(false)} className={styled.btn}>
                Close
              </button>
              <h1>Apple-TV</h1>
              <p>
              This is clone of an entertainment purpose App on which
users can enjoy watching TV shows, movies, and web series.
              </p>
              <p>
                <h3> Tech Stack: HTML,CSS,JavaScript</h3>
                An individual project executed in 5 days.
                Roles & Responsibility:
                1. A user can sign in and sign up. <br />
                2. If user forget log in credentials user can create new ID.  <br />
                3. User info is stored in Local Storage. <br />
                4. User can Watch specific season which are present in Database. <br />
              </p>
              
            </Modal>
          </div>
          <h5>HTML || CSS || JavaScript</h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/ishaan8282/unit3project-appleTv-.git"
              className={styled.size}
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              href="https://peppy-speculoos-082f5c.netlify.app/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{' '}
            </a>
          </div>
        </div>
      
      
      </div>


      {/* ----project3 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src={Airgarage}
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Airgarage</h2>
          <div className={styled.box}>
            <p>

         An individual project where I have Created a clone of a Parking Web site. That provide parking in your locality.
              <p onClick={() => setIsOpen3(true)}  className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen3}>
            <button onClick={() => setIsOpen3(false)} className={styled.btn}>
                Close
              </button>
              <h1>Airgarage</h1>
              <p>
              An individual project created in 4 days. Where I have Created a clone of a Parking Web site. That provide parking in your locality.
              </p>
              <p>
                <h3> Tech Stack: React(JSX),CSS,Chakra-UI</h3>
                An individual project executed in 4 days.
                Roles & Responsibility:
                This project mostly include UI
                1. Log In (by using Reqres API)
                2. Home Page.
                3. Find Parking Page. (Only UI)
              </p>
             
            </Modal>
          </div>
          <h5>React || CSS || Chakra-UI</h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/ishaan8282/judicious-loss-7894.git"
              className={styled.size}
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              href="https://airgarage-eight.vercel.app/Login"
              className={styled.size}
            >
              <BiLink className={styled.size} />{' '}
            </a>
          </div>
        </div>
      
      
      </div>



      {/* ----project-4 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src={TimeTrack}
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          
          <h2>Tracking-Time</h2>
          <div className={styled.box}>
            <p>

         An individual project where I have Created a clone of a Time Tracking website.
              <p onClick={() => setIsOpen4(true)}  className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen4}>
            
            <button onClick={() => setIsOpen4(false)} className={styled.btn}>
                Close
              </button>

              <h1>Tracking-Time</h1>
              <p>
              An individual project where I have Created a clone of a Time Tracking website.
              </p>
              <p>
                <h3> Tech Stack: React(JSX),CSS,Chakra-UI</h3>
                An individual project executed in 4 days.
                Roles & Responsibility:
                This project mostly include UI
                1. Log In (by using Reqres API)
                2. Home Page.
                3. Some other Pages like Integration, Blog. (Note : we have to run Json-Server)
              </p>
              
            </Modal>
          </div>
          <h5>React || CSS || Chakra-UI</h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/ishaan8282/spiky-playground-4065.git"
              className={styled.size}
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              href="https://tiny-otter-d224dd.netlify.app/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{' '}
            </a>
          </div>
        </div>
      
      
      </div>
      
      
         
        </div>
      
   
  )
}

export default Project
