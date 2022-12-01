import React from 'react';

export default function Portfolio({projects}) {
  return(
    <div>
      <h1>Portfolio</h1>
      <div className="project-group">
        {projects.map((project) => (
          <div className="project-group-item" key={project.id}>
            <img src={project.img}>
              <a href={project.link} target="_blank">{project.name}</a>
              <a href={project.repo} target="_blank">Github Icon</a>
            </img>
          </div>
        ))}
      </div>
    </div>
  );
}