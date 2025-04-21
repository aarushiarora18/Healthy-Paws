import dogs from "../../data/dogs";
import { notFound } from "next/navigation";

export default function DogDetail({ params }) {
  const { id } = params;
  const dog = dogs.find(d => d.id === id);

  if (!dog) return notFound();

  return (
    <div className="bg-pink-100 min-h-screen w-full">
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center p-6 space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Dog Image */}
            <div className="flex-shrink-0">
              <img 
                src={`${dog.image}`} 
                alt={dog.breed} 
                className="w-64 h-64 object-contain rounded-xl shadow-xl"
 
              />
            </div>

            {/* Dog Information */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">{dog.breed}</h1>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Lifespan:</strong> {dog.lifespan}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Temperament:</strong> {dog.temperament}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Origin:</strong> {dog.origin}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Size:</strong> {dog.size}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Grooming:</strong> {dog.grooming}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Exercise Needs:</strong> {dog.exerciseNeeds}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Energy:</strong> {dog.energy}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Description:</strong> {dog.description}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong className="font-semibold text-blue-500">Estimated Price in India:</strong> ₹{dog.estimatedPrice}
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-yellow-100 text-center text-gray-700 border-t-2 border-gray-300">
            <p className="font-medium">
              Remember, adopting a dog is a lifelong commitment! Please consider adopting from a shelter and giving a loving home to a furry friend in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
