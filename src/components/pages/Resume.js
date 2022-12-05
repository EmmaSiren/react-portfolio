import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1 className="title">Resume</h1>
      <p>
        Download my <a href="">resume</a>
      </p>
      <h2>Front-end Proficiences</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
        </ul>
      <h2>Back-end Proficiences</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
    </div>
  );
}