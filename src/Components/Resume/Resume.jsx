import React from 'react'
import styled from "./Resume.module.css"
const Resume = () => {
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
    <div id="resume">
      <h1 className={styled.mid}>Resume</h1>
      <div  className={styled.flex}>
      {/* <img className={styled.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF01H2L8h62qzU9Fykx2hig89U0Q73-EwVug&usqp=CAU" alt="cv"/> */}
      <a className={styled.img} href="https://drive.google.com/file/d/1W67NquTZ7YylTpn5oqLt9n6EKQZIMSwD/view?usp=share_link" download><button onClick={onButtonClick} className={styled.btn}>See My Resume</button></a>
      </div>
     
    </div>
  )
}

export default Resume
