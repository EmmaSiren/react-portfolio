import React from 'react';
import image from '../images/image1.jpg'

export default function AboutMe() {
  return (
    <div className="aboutPage">
      <h1 className="title">About Me</h1>
      <img id="meImage" alt="" src={image}></img>
      <div id="aboutMe">
        <p>Hello! My name is Emma and I have been diligently learning 
          and studying web development for the past six months now. 
          Though I had a tech savvy background there are so many things 
          I have learned in my time in this coding bootcamp. If you navigate 
          to the Resume page by clicking on the corresponding tab you will 
          see a full list of both Front-end and Back-end technologies I have learned. 
        </p>
        <p>
          I plan to further my learning by consistently practicing my skills as I 
          prepare for my technical interviews as well as while on the job. I cannot 
          wait to showcase my knowledge of web development and software engineering 
          to my potential employers. You can view a collection of my works in the 
          Portfolio page. There you will find links to both the deployed applications 
          and their corresponding Github Repositories. If you have any questions or 
          would like to contact me for employment opportunities please navigate to the 
          Contact tab and leave me a message. Thank you! 
        </p>
      </div>
    </div>
  );
}