//app/quiz/results/pages
'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { dogs } from '@/data/dogs'; // Your updated dogs array

function ResultsPageContent() {
  const params = useSearchParams();

  const homeSize = params.get('homeSize');
  const activityLevel = params.get('activityLevel');
  const experience = params.get('experience');

  const matchingDogs = dogs.filter(dog => {
    const sizeMatch = homeSize === 'small' ? dog.size !== 'large' : true;
    const energyMatch =
      activityLevel === 'high'
        ? dog.energy === 'high'
        : activityLevel === 'medium'
        ? dog.energy !== 'low'
        : dog.energy === 'low';
    const experienceMatch = experience === 'first-time' ? dog.energy !== 'high' : true;

    return sizeMatch && energyMatch && experienceMatch;
  });

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {matchingDogs.map((dog) => (
        <Link
          key={dog.id}
          href={`/dog/${dog.id}`}
          className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
        >
          <div className="relative w-full h-48">
            <Image
              src={dog.image}
              alt={dog.breed}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold">{dog.breed}</h2>
            <p className="text-sm text-gray-500">Size: {dog.size}</p>
            <p className="text-sm text-gray-500">Energy: {dog.energy}</p>
          </div>
        </Link>
      ))}

      {matchingDogs.length === 0 && (
        <p className="text-center col-span-full text-gray-600 text-lg">No perfect matches found. Try changing your answers!</p>
      )}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-gray-500">Loading matching dogs...</div>}>
      <ResultsPageContent />
    </Suspense>
  );
}
