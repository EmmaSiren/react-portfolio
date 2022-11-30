import React from 'react';

export default function Portfolio({projects}) {
  return(
    <div>
      <h1>Portfolio</h1>
      <ul className="list-group">
        {projects.map((project) => (
          <li className="list-group-item" key={project.id}>
            <a href={project.link}>{project.name}</a>
            <a href={project.repo}>Github Icon</a>
          </li>
        ))}
      </ul>
    </div>
  );
}