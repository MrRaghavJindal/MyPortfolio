import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import * as Icons from 'lucide-react';

const About: React.FC = () => {
  // Get icon component from Lucide
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <section className="space-y-8 animate-fadeIn">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hello, I'm {personalInfo.name}</h1>
        <h2 className="text-2xl text-blue-600 mb-6">{personalInfo.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed">{personalInfo.bio}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div className="flex items-center mb-3">
                  <span className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                    <Icons.Code size={20} />
                  </span>
                  <h4 className="font-medium">Web Development</h4>
                </div>
                <p className="text-gray-600 text-sm">Creating responsive and performant web applications with modern frameworks.</p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div className="flex items-center mb-3">
                  <span className="p-2 bg-green-100 text-green-600 rounded-lg mr-3">
                    <Icons.Server size={20} />
                  </span>
                  <h4 className="font-medium">Backend Systems</h4>
                </div>
                <p className="text-gray-600 text-sm">Building robust APIs and server architectures that scale.</p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div className="flex items-center mb-3">
                  <span className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-3">
                    <Icons.PenTool size={20} />
                  </span>
                  <h4 className="font-medium">UI/UX Design</h4>
                </div>
                <p className="text-gray-600 text-sm">Creating intuitive user experiences with clean, modern interfaces.</p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div className="flex items-center mb-3">
                  <span className="p-2 bg-amber-100 text-amber-600 rounded-lg mr-3">
                    <Icons.Target size={20} />
                  </span>
                  <h4 className="font-medium">Performance Optimization</h4>
                </div>
                <p className="text-gray-600 text-sm">Improving application speed and efficiency through code optimization.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <Icons.Mail className="mr-3 text-blue-600" size={18} />
                <span>{personalInfo.email}</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Icons.Phone className="mr-3 text-blue-600" size={18} />
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Icons.MapPin className="mr-3 text-blue-600" size={18} />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <div className="flex flex-wrap gap-3">
              {personalInfo.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;