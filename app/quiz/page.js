'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizPage() {
  const router = useRouter();
  const [homeSize, setHomeSize] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz/results?homeSize=${homeSize}&activityLevel=${activityLevel}&experience=${experience}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold text-indigo-700 mb-10 text-center">🐾 Find Your Perfect Dog 🐾</h1>

      <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">🏠 Home Size</label>
          <select 
            value={homeSize}
            onChange={(e) => setHomeSize(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300"
          >
            <option value="">Select...</option>
            <option value="small">Small (Apartment)</option>
            <option value="medium">Medium (House with Yard)</option>
            <option value="large">Large (Farm/Big Land)</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">⚡ Activity Level</label>
          <select 
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300"
          >
            <option value="">Select...</option>
            <option value="high">High (Love running & hiking)</option>
            <option value="medium">Medium (Daily walks)</option>
            <option value="low">Low (Chill indoors)</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">🎓 Experience with Dogs</label>
          <select 
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300"
          >
            <option value="">Select...</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Had a dog before</option>
            <option value="expert">Expert (Handled many dogs)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold transition-all duration-300"
        >
          Show My Matches 🐶
        </button>

      </form>
    </div>
  );
}
