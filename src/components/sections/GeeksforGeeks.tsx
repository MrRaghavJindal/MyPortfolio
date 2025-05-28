import React from 'react';
import { codingProfiles } from '../../data/portfolioData';
import * as Icons from 'lucide-react';

const GeeksforGeeks: React.FC = () => {
  const gfgProfile = codingProfiles.find(profile => profile.platform === 'GeeksforGeeks');

  if (!gfgProfile) {
    return <div>Profile not found</div>;
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-600 bg-green-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'hard':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section className="space-y-8 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">GeeksforGeeks Profile</h1>
        <p className="text-gray-600 mt-2">My coding journey on GeeksforGeeks</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Recent Submissions</h2>
                <p className="text-gray-600 text-sm mt-1">Latest problem-solving activities</p>
              </div>
              <a
                href={gfgProfile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <span>View Profile</span>
                <Icons.ExternalLink size={16} />
              </a>
            </div>

            <div className="space-y-4">
              {gfgProfile.recentSubmissions.map((submission, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <Icons.CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{submission.title}</h3>
                      <p className="text-sm text-gray-600">{submission.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(submission.difficulty)}`}>
                    {submission.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Stats</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <p className="text-sm text-blue-600 mb-1">Coding Score</p>
                <p className="text-2xl font-bold text-blue-700">{gfgProfile.stats.score}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Problems Solved</p>
                  <p className="text-xl font-semibold text-gray-800">{gfgProfile.stats.problemsSolved}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Monthly Score</p>
                  <p className="text-xl font-semibold text-gray-800">{gfgProfile.stats.monthlyScore}</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600 mb-1">Current Rank</p>
                <p className="text-xl font-semibold text-green-700">{gfgProfile.stats.rank}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeeksforGeeks;