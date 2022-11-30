import React from 'react';
import Portfolio from './pages/Portfolio';
import projects from './pages/ProjectList'

export default function PortfolioContainer() {
  return (
    <div>
      <Portfolio projects={projects}/>
    </div>
  );
}