'use client';
import React from 'react';
import { MapPin, HeartPulse, Dog, Info, HelpCircle, Bot } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Vets Near You',
    description: 'Find trusted veterinarians in your area.',
    icon: <HeartPulse className="h-6 w-6 text-blue-600" />,
    link: '/vets'
  },
  {
    title: 'Shelters Nearby',
    description: 'Discover local dog shelters and adoption centers.',
    icon: <MapPin className="h-6 w-6 text-green-600" />,
    link: '/shelters'
  },
  {
    title: 'Dog Breeds',
    description: 'Explore various breeds and their characteristics.',
    icon: <Dog className="h-6 w-6 text-yellow-600" />,
    link: '/dogs'
  },
  {
    title: 'Detailed Info',
    description: 'Get in-depth info on dogs and their needs.',
    icon: <Info className="h-6 w-6 text-purple-600" />
  },
  {
    title: 'Dog Quiz',
    description: 'Take a quiz to find your perfect dog match.',
    icon: <HelpCircle className="h-6 w-6 text-pink-600" />,
    link: '/quiz'
  },
  {
    title: 'AI Chatbot',
    description: 'Ask our AI anything about dogs and adoption.',
    icon: <Bot className="h-6 w-6 text-red-600" />
  }
];

const DogAdoptionDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to HealthyPaws 🐾</h1>
        <p className="text-gray-600 mt-2">Your one-stop destination for dog adoption and care</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) =>
          feature.link ? (
            <Link
              href={feature.link}
              key={index}
              className="group p-6 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 rounded-full p-3">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow opacity-90 cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 rounded-full p-3">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2024 HealthyPaws. All rights reserved.
      </footer>
    </div>
  );
};

export default DogAdoptionDashboard;
