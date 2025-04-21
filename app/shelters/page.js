"use client"; // Marking this component as a Client Component

import { useEffect, useState } from "react";

export default function Shelters() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    // Static list of ~50 countries
    setCountries([
      "India", "USA", "Canada", "Australia", "United Kingdom", "Germany", "France", "Brazil", "Japan", "South Korea",
      "Mexico", "Russia", "Italy", "Spain", "Netherlands", "China", "South Africa", "New Zealand", "Sweden", "Norway",
      "Switzerland", "Denmark", "Finland", "Poland", "Ireland", "Portugal", "Argentina", "Chile", "Colombia", "Peru",
      "Philippines", "Indonesia", "Thailand", "Malaysia", "Vietnam", "Egypt", "Turkey", "Saudi Arabia", "UAE", "Nigeria",
      "Kenya", "Morocco", "Bangladesh", "Pakistan", "Sri Lanka", "Nepal", "Greece", "Belgium", "Hungary", "Czech Republic"
    ]);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Example cities for a few countries
      if (selectedCountry === "India") {
        setCities(["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"]);
      } else if (selectedCountry === "USA") {
        setCities(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]);
      } else if (selectedCountry === "Canada") {
        setCities(["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"]);
      } else if (selectedCountry === "Australia") {
        setCities(["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"]);
      } else if (selectedCountry === "United Kingdom") {
        setCities(["London", "Manchester", "Birmingham", "Liverpool", "Leeds"]);
      } else if (selectedCountry === "Germany") {
        setCities(["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"]);
      } else if (selectedCountry === "France") {
        setCities(["Paris", "Lyon", "Marseille", "Nice", "Toulouse"]);
      } else {
        setCities([]);
      }
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCity) {
      // Fetch shelters using backend or Google API
      (async () => {
        const res = await fetch(`/api/shelters?city=${selectedCity}`);
        const data = await res.json();
        setShelters(data);
      })();
    }
  }, [selectedCity]);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/background-paws.png")', // Set your PNG image as background
      }}
    >
      <div className="flex items-center justify-center min-h-screen p-4 bg-purple-200 bg-opacity-40"> {/* Light purple overlay */}
        <div className="bg-white/70 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-xl font-bold mb-4 text-center">Find Animal Shelters 🐾</h1>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedCity(""); // reset city
                setShelters([]);
              }}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Country</option>
              {countries.map((country, idx) => (
                <option key={idx} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {cities.length > 0 && (
            <div className="mb-4">
              <label className="block mb-2 font-medium">City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="">Select City</option>
                {cities.map((city, idx) => (
                  <option key={idx} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedCity && (
            <div>
              <h2 className="font-semibold mb-2">Shelters in {selectedCity}</h2>
              {shelters.length > 0 ? (
                shelters.map((shelter, idx) => (
                  <div key={idx} className="border rounded-lg p-4 mb-4 shadow-md">
                    <h3 className="font-semibold">{shelter.name}</h3>
                    <p>{shelter.vicinity}</p>
                    {shelter.rating && <p>⭐ {shelter.rating}</p>}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shelter.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View on Map
                    </a>
                  </div>
                ))
              ) : (
                <p>Finding shelters...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
