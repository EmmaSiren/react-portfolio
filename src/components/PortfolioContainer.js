import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import projects from './pages/ProjectList';
import Resume from './pages/Resume';
import './portfolioContainer.css'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if(currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if(currentPage === 'Portfolio') {
      return <Portfolio projects={projects}/>
    }
    if(currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
       <header>
        <h1 className="display-5 fw-bold">Emma Velazquez</h1>
        <nav>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
      </header>
      <section className="container">
        {renderPage()}
      </section>
      <footer className="text-center">Footer</footer>
    </div>
  );
}