import React, { useState } from 'react';
import { skills } from '../../data/portfolioData';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: 'technical', label: 'Technical', icon: 'Code' },
    { id: 'tool', label: 'Tools', icon: 'Wrench' },
    { id: 'soft', label: 'Soft Skills', icon: 'Users' },
    { id: 'language', label: 'Languages', icon: 'Languages' },
  ];

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  // Get icon component from Lucide
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <section className="space-y-8 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Skills</h1>
        <p className="text-gray-600 mt-2">My technical and professional skills</p>
      </header>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            activeCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Icons.ListFilter size={18} />
          <span>All Skills</span>
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {getIcon(category.icon)}
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-800">{skill.name}</h3>
              <span className="text-sm font-medium text-blue-600">{skill.proficiency}%</span>
            </div>
            
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full"
                style={{ 
                  width: `${skill.proficiency}%`,
                  transition: 'width 1s ease-in-out',
                }}
              ></div>
            </div>
            
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-500">
                {skill.category === 'technical' && 'Programming'}
                {skill.category === 'soft' && 'Soft Skill'}
                {skill.category === 'language' && 'Language'}
                {skill.category === 'tool' && 'Tool/Platform'}
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Icons.Star
                    key={i}
                    size={14}
                    className={i < Math.round(skill.proficiency / 20) ? 'text-yellow-400' : 'text-gray-200'}
                    fill={i < Math.round(skill.proficiency / 20) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;