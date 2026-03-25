import React, { useState } from 'react'
import styled from './Contact.module.css'
import Modal from 'react-modal'

let obj = {
  "user_name": "",
  "contact_number": "",
  "user_email": "",
  "message": "",
}

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState(obj)

  const handleChange = (e) => {
    let [name, value] = e.target
    let payload = { [name]: value, ...data }
    setData(payload)
  }

  const handleClick = () => setIsOpen(true)

  return (
    <form
      id="contact"
      action="https://formspree.io/f/meqdnnye"
      method="POST"
      className={styled.section}
    >
      {/* Single gold heading — same pattern as Skills / Projects / Resume */}
      <h1 className={styled.h1}>Contact</h1>

      <div className={styled.card}>

        <div className={styled.top}>
          <input
            onChange={handleChange}
            className={styled.color}
            name="user_name"
            placeholder="Full Name"
            type="text"
            required
          />
          <input
            onChange={handleChange}
            className={styled.color1}
            name="contact_number"
            placeholder="Mobile Number"
            type="text"
            required
          />
        </div>

        <input
          onChange={handleChange}
          className={styled.color2}
          name="user_email"
          placeholder="Email Id"
          type="email"
          required
        />

        <input
          onChange={handleChange}
          className={styled.color2}
          name="message"
          placeholder="Subject of the message"
          type="text"
          required
        />

        <button type="submit" onClick={handleClick} className={styled.btn}>
          Send Message
        </button>

      </div>

      <Modal className={styled.background} isOpen={isOpen}>
        <h1 className={styled.h1}>Congratulations! Message sent successfully.</h1>
        <button onClick={() => setIsOpen(false)} className={styled.btn}>
          Close
        </button>
      </Modal>
    </form>
  )
}

export default Contact