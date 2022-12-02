import React from 'react';
import image from '../images/image1.jpg'

export default function AboutMe() {
  return (
    <div>
      <h1 id="aboutMe">About Me</h1>
      <img id="meImage" src={image}></img>
      <p> Lorem ipsum dolor</p>
    </div>
  );
}