import React from 'react';
import { NavItem } from '../types';
import * as Icons from 'lucide-react';
import raghav from '../assets/raghav.png'
interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  onNavItemClick: (sectionId: string) => void;
  isMobile: boolean;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  activeSection,
  onNavItemClick,
  isMobile,
  isOpen,
}) => {
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10"
          onClick={() => onNavItemClick(activeSection)}
        ></div>
      )}

      <aside
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-20 w-72 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : 'w-72 sticky top-0 h-screen'
        } glass-card border-r border-white/20 transition-all duration-300 ease-in-out overflow-y-auto`}
        style={{ backgroundColor: '#0a052e' }}
      >
        <div className="p-8">
          <div className="mb-8 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary-500/20">
              <img
                src={raghav}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold gradient-text">RAGHAV JINDAL</h2>
            <p className="text-gray-600 mt-1">Portfolio</p>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavItemClick(item.id)}
                className={`nav-item w-full ${
                  activeSection === item.id
                    ? 'nav-item-active'
                    : 'text-secondary-50 hover:bg-gray-100 hover:text-gray-700'
                }`}
              >
                <span className="flex-shrink-0">{getIcon(item.icon)}</span>
                <span className="font-medium ">{item.label}</span>
                {activeSection === item.id && (
                  <span className="ml-auto w-1.5 h-6 rounded-full bg-gradient-to-b from-primary-500 to-secondary-500"></span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;