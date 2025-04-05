import React from 'react';
import Image from 'next/image';

export default function ShelterCard({ shelter }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Image
        src={shelter.image}
        alt={shelter.name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{shelter.name}</h3>
        <p className="text-gray-500">{shelter.location}</p>
        <p className="mt-2 text-gray-600 text-sm">{shelter.description}</p>
      </div>
    </div>
  );
}
