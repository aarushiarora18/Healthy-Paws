//app/quiz/results/page.js
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { dogs } from '../../api/dogs/[id]/route'; // Your dogs array
import { Suspense } from 'react';

function ResultsPageContent() {
  const params = useSearchParams();

  const homeSize = params.get('homeSize');
  const activityLevel = params.get('activityLevel');
  const experience = params.get('experience');

  const matchingDogs = dogs.filter(dog => {
    return (
      (homeSize === 'small' && dog.size !== 'large') &&
      (activityLevel === 'high' ? dog.energy === 'high' : true) &&
      (experience === 'first' ? dog.energy !== 'high' : true)
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Matching Dogs</h1>
      <ul>
        {matchingDogs.map((dog) => (
          <li key={dog.id}>
            <Link href={`/dog/${dog.id}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <ResultsPageContent />
    </Suspense>
  );
}
