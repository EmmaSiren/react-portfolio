import React from 'react';
import image from '../images/image1.jpg'

export default function AboutMe() {
  return (
    <div className="aboutPage">
      <h1 className="title">About Me</h1>
      <img id="meImage" alt="" src={image}></img>
      <div id="aboutMe">
        <p>
          Hello there! 
        </p>
        <p>
          I’m Emma Velazquez and I am a Certified Full Stack Web Developer with a background 
          in Data Entry and experience in a Leadership position. I am a goal oriented 
          multi-tasker with high accuracy and a strong attention to detail. My passion 
          for learning is what drives my dedication to improving and advancing my knowledge 
          of new and progressing technologies. I have a creative eye for art and design with 
          a freelance artwork selling background that brings a unique skill for attractive 
          and engaging user experiences in web applications.
        </p>
        <p>
        For the past eight months I have been diligently learning and studying both front 
        and back end web development and I'm happy to announce my official Full Stack Web 
        Developer Certification in December of 2022 through the University of California, 
        Irvine’s Division of Continuing Education Coding Boot Camp. Though I began with an 
        already tech savvy background there were so many things I learned during my time in 
        the program. You will see a full list of all the technologies I have proficiency in 
        on the Resume page, as well as a downloadable copy of my up-to-date resume. The 
        Projects page displays a collection of my current and past projects where you will 
        find links to both the deployed applications and their corresponding Github repositories.
        </p>
      </div>
    </div>
  );
}