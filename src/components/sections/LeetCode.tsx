import React from 'react';
import * as Icons from 'lucide-react';

const LeetCode: React.FC = () => {
  return (
    <section className="space-y-8 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">LeetCode Profile</h1>
        <p className="text-gray-600 mt-2">My problem-solving journey on LeetCode</p>
      </header>

      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Icons.Binary size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">Please provide your LeetCode profile URL to display your statistics</p>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;