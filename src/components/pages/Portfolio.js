import React from 'react';
import './portfolio.css';

export default function Portfolio({projects}) {
  return(
    <div className="container">
      <h1>Portfolio</h1>
      <div className="project-group row">
        {projects.map(project => (
          <div className="project-group-item project col" key={project.id}>
            <img className="image" src={project.img}/>
            <div className="overlay">
              <a href={project.link} className="name text" target="_blank">{project.name}</a>
              <a href={project.repo} className="repo text" target="_blank">Github Icon</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}