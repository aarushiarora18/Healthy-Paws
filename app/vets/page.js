"use client";
import { useEffect, useState } from "react";

export default function VetsNearby() {
  const [location, setLocation] = useState(null);
  const [vets, setVets] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setLocation(coords);

        // Call your backend API to get vets
        const res = await fetch(`/api/vets?lat=${coords.lat}&lng=${coords.lng}`);
        const data = await res.json();
        setVets(data);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center relative"> {/* Relative container to position images */}
      <div className="p-6 w-full max-w-2xl"> {/* Limited width for content */}
        <h1 className="text-xl font-bold mb-4 text-center">Vets Near You 🐶</h1> {/* Center heading */}
        {vets.length > 0 ? (
          vets.map((vet, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg p-4 mb-4 shadow-md"
            >
              <h2 className="font-semibold text-center">{vet.name}</h2> {/* Center vet name */}
              <p className="text-center">{vet.vicinity}</p> {/* Center vicinity */}
              {vet.rating && <p className="text-center">⭐ {vet.rating}</p>} {/* Center rating */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vet.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-center block"
              >
                View on Map
              </a>
            </div>
          ))
        ) : (
          <p className="text-center">Finding nearby vets...</p> 
        )}
      </div>

      
      {/* Bottom-Right Image */}
      <img
        src="/bottom-right.png"
        alt="Top Right"
        className="absolute top-0 right-0 m-4 w-30 h-30 object-contain"
      />
    </div>
  );
}
