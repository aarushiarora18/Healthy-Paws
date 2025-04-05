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
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Vets Near You 🐶</h1>
      {vets.length > 0 ? (
        vets.map((vet, i) => (
          <div key={i} className="border rounded-lg p-4 mb-4 shadow-md">
            <h2 className="font-semibold">{vet.name}</h2>
            <p>{vet.vicinity}</p>
            {vet.rating && <p>⭐ {vet.rating}</p>}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vet.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View on Map
            </a>
          </div>
        ))
      ) : (
        <p>Finding nearby vets...</p>
      )}
    </div>
  );
}
