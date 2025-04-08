//app/dog/page.js
"use client";

import Link from "next/link";

export default function DogsPage() {
  const dogs = [
    {
      id: "1",
      name: "Boomer",
      age: 2,
      breed: "Rottweiler",
      image: "/dog1.jpeg",
    },
    {
      id: "2",
      name: "Ghost",
      age: 2,
      breed: "German Shephard",
      image: "/dog2.jpeg",
    },
    {
      id: "3",
      name: "Lailaa",
      age: 3,
      breed: "Golden retreiver",
      image: "/dog3.jpeg",
    },
    {
      id: "4",
      name: "Whiskey",
      age: 3,
      breed: "Siberian Husky",
      image: "/dog4.jpeg",
    },
    {
      id: "5",
      name: "Poppins",
      age: 2,
      breed: "Pomeranian",
      image: "/dog5.png",
    },
    {
      id: "6",
      name: "Daisy",
      age: 2.5,
      breed: "Pomeranian",
      image: "/dog6.jpeg",
    },
    {
      id: "7",
      name: "Boogey",
      age: 4,
      breed: "Labrador Retreiver",
      image: "/dog7.jpeg",
    },
    {
      id: "8",
      name: "Wendy",
      age: 3,
      breed: "",
      image: "/dog8.jpeg",
    },
    {
      id: "d9",
      name: "Casey",
      age: 3,
      breed: "Golden Retreiver",
      image: "/dog9.jpeg",
    },
    {
      id: "10",
      name: "",
      age: 1,
      breed: "",
      image: "/dog10.jpeg",
    },
    {
      id: "11",
      name: "Peepee",
      age: 0.5,
      breed: "",
      image: "/dog11.jpeg",
    },
    {
      id: "12",
      name: "Oscar",
      age: 3,
      breed: "",
      image: "/dog12.jpeg",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif mb-8 text-center text-sky-600">
          Adoptable Dogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <Link href={`/dogs/${dog.id}`} key={dog.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold">{dog.name}</h2>
                  <p className="text-gray-600">{dog.breed}</p>
                  <p className="text-sm text-gray-500">{dog.age}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
