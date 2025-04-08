'use client';
import React, { useEffect, useState } from 'react';
import ShelterCard from '@/components/ShelterCard';
import Link from 'next/link';

export default function SheltersPage() {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const res = await fetch('/api/shelters');
        const data = await res.json();
        setShelters(data);
      } catch (error) {
        console.error('Failed to fetch shelters:', error);
      }
    };
    fetchShelters();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif mb-12 text-center text-gray-800">
          Available <span className="bg-gradient-to-r from-sky-300 to-indigo-300 text-transparent bg-clip-text">Shelters</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shelters.length > 0 ? (
            shelters.map((shelter) => (
              <Link
                key={shelter.id}
                href={`/shelters/${shelter.id}`}
                className="hover:scale-[1.02] transition-transform duration-200"
              >
                <ShelterCard shelter={shelter} />
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Loading shelters...</p>
          )}
        </div>
      </div>
    </div>
  );
}
