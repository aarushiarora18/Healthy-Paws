'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Search, MapPin, Users, ArrowUpRight, SlidersHorizontal } from 'lucide-react';

const DogAdoptionPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await axios.get('/api/dogs'); // Update with actual API endpoint
                setDogs(response.data);
            } catch (error) {
                console.error("Error fetching dogs data:", error);
            }
        };
        fetchDogs();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredDogs = dogs.filter(dog => {
        const matchesSearchQuery =
            dog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dog.breed.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSelectedFilter =
            selectedFilter === 'all' ||
            (selectedFilter === 'small' && dog.size === 'Small') ||
            (selectedFilter === 'medium' && dog.size === 'Medium') ||
            (selectedFilter === 'large' && dog.size === 'Large');
        return matchesSearchQuery && matchesSelectedFilter;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm py-6 px-8">
                <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Dog</h1>
                <p className="mt-2 text-sm text-gray-600">Adopt a loving companion today</p>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search by name or breed..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
                    >
                        <SlidersHorizontal className="h-5 w-5" /> Filters
                    </button>
                </div>
                {showFilters && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['all', 'small', 'medium', 'large'].map(filter => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedFilter === filter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDogs.map(dog => (
                    <div key={dog.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold">{dog.name}</h3>
                        <p className="text-gray-700">Breed: {dog.breed}</p>
                        <div className="mt-2 flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{dog.location}</span>
                        </div>
                        <div className="mt-4 flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-1" />
                            <span className="text-sm">{dog.age} years old</span>
                        </div>
                        <button className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Adopt Now <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>

            <footer className="bg-white border-t py-6 text-center text-gray-600">
                © 2024 Dog Adoption Center. All rights reserved.
            </footer>
        </div>
    );
};

export default DogAdoptionPage;
