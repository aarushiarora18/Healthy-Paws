'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { dogs } from '../../api/dogs/[id]/route'; // Your dogs array

export default function ResultsPage() {
  const params = useSearchParams();

  const homeSize = params.get('homeSize');
  const activityLevel = params.get('activityLevel');
  const experience = params.get('experience');

  const matchingDogs = dogs.filter(dog => {
    return (
      (homeSize === 'small' && dog.size !== 'large') &&
      (activityLevel === 'high' ? dog.energy === 'high' : true)
    );
  });

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-3xl font-bold mb-10 text-center">🐕 Your Perfect Matches</h1>

      {matchingDogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {matchingDogs.map((dog) => (
            <Link key={dog.id} href={`/dogs/${dog.id}`} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <img src={dog.image} alt={dog.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">{dog.name}</h2>
              <p className="text-gray-500 mt-2">Size: {dog.size}</p>
              <p className="text-gray-500">Energy: {dog.energy}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No dogs found matching your preferences 😔</p>
      )}
    </div>
  );
}
