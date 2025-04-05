'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ShelterDetailsPage() {
  const { shelterId } = useParams();
  const [shelter, setShelter] = useState(null);

  useEffect(() => {
    const fetchShelter = async () => {
      try {
        const res = await fetch(`/api/shelters/${shelterId}`);
        const data = await res.json();
        setShelter(data);
      } catch (err) {
        console.error('Error fetching shelter:', err);
      }
    };

    if (shelterId) fetchShelter();
  }, [shelterId]);

  if (!shelter) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">{shelter.name}</h1>
        <p className="text-center text-gray-600 mb-8">{shelter.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shelter.dogs && shelter.dogs.map((dog) => (
            <div key={dog.id} className="bg-gray-100 rounded-xl p-4 shadow">
              <img src={dog.image} alt={dog.name} className="w-full h-60 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold">{dog.name}</h2>
              <p className="text-gray-600">Breed: {dog.breed}</p>
              <p className="text-gray-600">Age: {dog.age} years</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
