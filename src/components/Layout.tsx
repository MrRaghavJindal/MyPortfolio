import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { navItems } from '../data/portfolioData';
import * as Icons from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeSection, setActiveSection }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Icons.Menu size={20} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        navItems={navItems}
        activeSection={activeSection}
        onNavItemClick={handleNavigation}
        isMobile={isMobile}
        isOpen={sidebarOpen}
      />

      {/* Main Content */}
      <main className={`flex-1 p-4 md:p-8 transition-all duration-300 ${
        isMobile && sidebarOpen ? 'opacity-30' : 'opacity-100'
      }`}>
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;