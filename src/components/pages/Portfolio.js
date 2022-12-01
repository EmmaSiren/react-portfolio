import React from 'react';

const styles = {
  card: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  name: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  repo: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Portfolio({projects}) {
  return(
    <div>
      <h1>Portfolio</h1>
      <div className="project-group">
        {projects.map(project => (
          <div className="project-group-item" style={styles.card} key={project.id}>
            <img src={project.img}/>
            <a href={project.link} style={styles.name} target="_blank">{project.name}</a>
            <a href={project.repo} style={styles.repo} target="_blank">Github Icon</a>
          </div>
        ))}
      </div>
    </div>
  );
}