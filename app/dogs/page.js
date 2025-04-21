import dogs from "../data/dogs";
import Link from "next/link";

export default function DogsList() {
  return (
    <div className="bg-pink-100 min-h-screen w-full">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Dog Breeds</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dogs.map((dog) => (
            <div
              key={dog.id}
              className="dog-item rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-white"
            >
              <img
                src={`${dog.image}`}
                alt={dog.breed}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dog.breed}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  <strong>Energy:</strong> {dog.energy}
                </p>
                <Link href={`/dogs/${dog.id}`}>
                  <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-lg w-full hover:bg-blue-200 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
