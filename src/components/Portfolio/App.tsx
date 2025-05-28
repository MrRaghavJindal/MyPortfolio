import React, { useState } from 'react';
import Layout from '../Layout';
import About from '../sections/About';
import Resume from '../sections/Resume';
import Projects from '../sections/Projects';
import Achievements from '../sections/Achievements';
import Skills from '../sections/Skills';
import GeeksforGeeks from '../sections/GeeksforGeeks';
import LeetCode from '../sections/LeetCode';

const PortfolioContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'achievements':
        return <Achievements />;
      case 'skills':
        return <Skills />;
      // case 'geeksforgeeks':
      //   return <GeeksforGeeks />;
      // case 'leetcode':
      //   return <LeetCode />;
      default:
        return <About />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderSection()}
    </Layout>
  );
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PortfolioContent />
    </div>
  );
}

export default Portfolio;