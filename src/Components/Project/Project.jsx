import React, { useState } from 'react'
import styled from './Project.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import parkEase from "../files/ParkEase.png"
import appletv from "../files/Appletv.jpg"
import TCD from "../files/TCD.png"
import Modal from 'react-modal'
const Project = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const startDate = new Date(2023, 2, 3);
    const today = new Date();

    let experience = today.getFullYear() - startDate.getFullYear();

    const hasNotReachedAnniversary =
        today.getMonth() < startDate.getMonth() ||
        (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate());

    if (hasNotReachedAnniversary) experience--;
    return (
        <div id="project">
            <h1 className={styled.mid}>Projects</h1>

            {/* ----project-1 */}
            <div className={styled.width}>
                <div className={styled.left}>
                    <img
                        className={styled.img}
                        src={TCD}
                        alt="TCD"
                    />
                </div>

                <div className={styled.right}>
                    <h4 className={styled.color}>Featured</h4>

                    <h2>The Careers Department (TCD)</h2>

                    <div className={styled.box}>
                        <p>
                            A large-scale career guidance platform used by schools, students,
                            parents, and employers. For the past {experience} years at TechSprinters, I have
                            contributed to multiple modules including Employer Portal, School
                            Management, and custom site builder features.
                            <p onClick={() => setIsOpen4(true)} className={styled.blue}>
                                Read More
                            </p>
                        </p>

                        <Modal className={styled.background} isOpen={isOpen4}>
                            <button onClick={() => setIsOpen4(false)} className={styled.btn}>
                                Close
                            </button>

                            <h1>The Careers Department (TCD)</h1>

                            <p>
                                TCD is a full-scale online career guidance platform used globally by
                                schools. It helps students explore careers, connect with employers,
                                and access personalised programs.
                            </p>

                            <p>
                                <h3>Tech Stack: Laravel (PHP), Vue.js, React, HTML, CSS, MySQL</h3>

                                <strong>Role: Full-Stack Web Developer ({experience}+ Years)</strong> <br /><br />

                                <strong>Major Responsibilities:</strong> <br />
                                - Built and enhanced the Employer Portal.<br />
                                - Implemented complex school management and custom site creation tools. <br />
                                - Developed dashboards, reporting modules, and role-based access control. <br />
                                - Designed and optimized database architecture for large-scale datasets. <br />
                                - Improved UX/UI across key modules for teachers, students, and parents. <br />
                                - Managed frontend (Vue/React) and backend (Laravel) features end-to-end. <br /><br />

                                <strong>Project Type:</strong>
                                Industry project with multiple developers, continuous development cycle.
                            </p>
                        </Modal>
                    </div>

                    <h5>Laravel || Vue.js || React || MySQL</h5>

                    <div className={styled.flex}>
                        <a
                            className={styled.size}
                            href="https://www.thecareersdepartment.com/"
                            target="_blank"
                            data-tooltip="Live Site"
                        >
                           <BiLink className={styled.size} />
                        </a>

                        <a
                            className={styled.size}
                            href="https://dev.thecareersdepartment.com/#/sign-in"
                            target="_blank"
                            data-tooltip="Dev Site"
                        >
                           <BiLink className={styled.size} />
                        </a>
                    </div>
                </div>
            </div>


            {/* ----project-2 */}
            <div className={styled.width}>
                <div className={styled.left}>
                    <img
                        className={styled.img}
                        src={parkEase}
                        alt="logo"
                    />
                </div>
                <div className={styled.right}>
                    <h4 className={styled.color}>Featured</h4>
                    <h2>ParkEase</h2>

                    <div className={styled.box}>
                        <p>
                            ParkEase is an intelligent parking management system that helps users find,
                            reserve, and manage parking spaces in real-time. It provides an admin
                            dashboard, role-based access, and live monitoring for smoother parking operations.
                            <p className={styled.blue} onClick={() => setIsOpen(true)}>
                                Read More
                            </p>
                        </p>

                        <Modal className={styled.background} isOpen={isOpen}>
                            <button onClick={() => setIsOpen(false)} className={styled.btn}>
                                Close
                            </button>

                            <h1>ParkEase – Smart Parking Management App</h1>

                            <p>
                                ParkEase is a full-stack parking management solution built using Vue 3,
                                Laravel, and MySQL. It enables users to search available parking spaces,
                                book slots, and make quick reservations. Admins can manage cities,
                                parking lots, pricing, and live occupancy.
                            </p>

                            <p>
                                <h3>Tech Stack: Vue 3, Laravel, MySQL, Tailwind CSS</h3>

                                <strong>Key Features:</strong> <br />
                                1. User authentication & role-based access (Admin / User). <br />
                                2. Add, edit, and manage parking spaces with pricing. <br />
                                3. Real-time availability of parking slots. <br />
                                4. City-wise parking filtering and search. <br />
                                5. Booking confirmation & reservation history. <br />
                                6. Responsive UI with clean dashboard experience. <br />
                            </p>
                        </Modal>
                    </div>

                    <h5>Vue 3 || Laravel || MySQL || Tailwind CSS</h5>

                    <div className={styled.flex}>
                        <a
                            className={styled.size}
                            href="https://github.com/ishaan8282/ParkEase"
                        >
                            <AiFillGithub className={styled.size} />
                        </a>
                        <a
                            className={styled.size}
                            href="https://parkease-production-4b72.up.railway.app/"
                        >
                            <BiLink className={styled.size} />
                        </a>
                    </div>
                </div>
            </div>


            {/* ----project3 */}
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
                            <p onClick={() => setIsOpen2(true)} className={styled.blue}>
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
        </div>


    )
}

export default Project
