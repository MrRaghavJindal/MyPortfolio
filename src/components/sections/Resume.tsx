import React from 'react';
import { experiences, education } from '../../data/portfolioData';
import * as Icons from 'lucide-react';

import resume from '../../assets/Resume.pdf'
const Resume: React.FC = () => {

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resume;
  link.download = 'RaghavResume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section className="space-y-8 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
        <p className="text-gray-600 mt-2">My professional journey and education</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center mb-6">
              <Icons.Briefcase className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-gray-800">Work Experience</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((experience) => (
                <div 
                  key={experience.id} 
                  className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"
                >
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{experience.position}</h3>
                    <span className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                      {experience.startDate} — {experience.endDate}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{experience.company}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Icons.CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {experience.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center mb-6">
              <Icons.GraduationCap className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500">
                      {edu.startDate} — {edu.endDate}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.field}</p>
                  <p className="text-gray-600 mt-1">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-gray-600 mt-2 text-sm">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Icons.Download className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-gray-800">Download</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4">Download my resume for a complete overview of my work experience and qualifications.</p>
              <button onClick={handleDownload} className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Icons.Download size={18} />
                <span >Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;