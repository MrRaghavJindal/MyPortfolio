import React from 'react';
import { achievements } from '../../data/portfolioData';
import * as Icons from 'lucide-react';

const Achievements: React.FC = () => {
  // Get icon component from Lucide
  const getIcon = (iconName: string | undefined) => {
    if (!iconName) return <Icons.Award size={24} />;
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon size={24} /> : <Icons.Award size={24} />;
  };

  return (
    <section className="space-y-8 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
        <p className="text-gray-600 mt-2">Recognition and milestones in my professional journey</p>
      </header>

      <div className="relative border-l-2 border-blue-200 pl-8 ml-4 space-y-12">
        {achievements.map((achievement, index) => (
          <div key={achievement.id} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[42px] p-2 bg-blue-100 rounded-full border-4 border-white">
              <div className="text-blue-600">
                {getIcon(achievement.icon)}
              </div>
            </div>

            {/* Card */}
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"
              style={{ 
                transform: `translateY(${index % 2 === 0 ? '0' : '20px'})`,
                animation: `fadeInUp 0.6s ease forwards ${0.2 + index * 0.1}s`
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                <span className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                  {achievement.date}
                </span>
              </div>
              
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;