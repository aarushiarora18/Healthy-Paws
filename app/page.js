
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ✅ IMPORT THIS
import { ChevronRight, Search, Star, Users, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import MascotButton from "../components/MascotButton";
import ChatbotModal from "../components/ChatbotModal";

 

export default function LandingPage() {
  const router = useRouter(); 
  const handleTakeQuiz = () => {
    router.push('/quiz');
  };
  const [isChatOpen, setChatOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-indigo-300">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* <img 
            src="/api/placeholder/1920/1080" 
            alt="Campus background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          /> */}
        </div>
        <div 
  className="relative w-full h-[700px] opacity-80 bg-cover bg-center flex flex-col items-center justify-center p-8"
  style={{
    backgroundImage: "url('/background-paws.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

  
  {/* <div className="absolute inset-0 bg-black/30"></div> */}


  <div className="px-4 sm:px-6 lg:px-8 opacity-100 max-w-5xl mx-auto text-center">
    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white [text-shadow:_0_1px_12px_rgb(0_0_0_/_20%)]">
      Adopt Your New
      <span className="block mt-2 text-white">
        Best Friend
      </span>
    </h2>
    <p className="text-xl md:text-2xl mb-12 text-blue-50 max-w-3xl mx-auto leading-relaxed">
      Because every wagging tail deserves a place to call home and a family to love.
    </p>
  </div>
          {/* Search Bar
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search shelters, dogs, or vets..."
                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <button className="absolute right-2 top-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div> */}

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/explore" 
              className="group bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" 
              className="group bg-blue-700/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More
            </Link>
          </div> */}
        </div>
      </section>

      {/* Stats Section
      <div className="relative -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          {[
            { label: "Shelters", value: "20+" },
            { label: "Dogs waiting to be adopted", value: "100+" },
            { label: "Verified vets", value: "50+" },
            { label: "Success Rate", value: "94%" }
          ].map((stat, index) => (
            <div key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> */}
      {/* <button
        onClick={handleTakeQuiz}
        className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
      >
        Take the Dog Quiz
      </button> */}
      {/* Dog + Speech Bubble */}
      <div 
        className="fixed top-32 left-8 flex items-center space-x-4 cursor-pointer z-50"
        onClick={handleTakeQuiz}
      >
        {/* Dog Image */}
        <img 
          src="/quiz-dog.png" // <-- Save your PNG inside /public
          alt="Cute Dog"
          className="w-24 h-24 object-contain" 
        />

        {/* Speech Bubble */}
        <div className="relative bg-white text-gray-800 px-5 py-3 rounded-2xl shadow-md border border-gray-200 text-base">
          Take a quiz to find your dog!

          {/* Correct Bubble Tail */}
          <div className="absolute -left-2 top-5 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-200"></div>
        </div>
      </div>
      {/* Features Section
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-16 text-gray-800">
            Why Choose 
            <span className="bg-gradient-to-r from-sky-300 to-indigo-300 text-transparent bg-clip-text"> HealthyPaws?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real shelters",
                desc: "Explore a wide range of shelters based on your area.",
                icon: <Search className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Adorable pups",
                desc: "Adopt your dog according to your lifestyle.",
                icon: <Star className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Connect with Vets",
                desc: "Directly interact with vets to get information about your current best friend.",
                icon: <Users className="w-8 h-8 text-blue-600" />
              }
            ].map((feature, index) => (
              <div key={index} 
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h3 className="text-4xl font-serif text-center mb-16">
            How It 
            <span className="bg-gradient-to-r from-sky-300 to-indigo-300 text-transparent bg-clip-text"> Works</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            {/* Connecting line in background */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-sky-300 to-indigo-300"></div>
            
                        {[
              {
                title: "Search for vets ",
                desc: "Find the nearest vets to you as per your convenience.",
                icon: <Search className="w-8 h-8" />,
                link: "/vets"   // <-- Add link here
              },
              {
                title: "Study different dog breeds",
                desc: "Before adopting, get to know all your desired dogs breed through our website.",
                icon: <BookOpen className="w-8 h-8" />,
                link: "/dogs"
              },
              {
                title: "Find shelters",
                desc: "You can discover shelters near you and support them!",
                icon: <ArrowRight className="w-8 h-8" />,
                link: "/shelters"
              }
            ].map((step, index) => (
              <Link href={step.link} key={index}>
                <div className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className="bg-gradient-to-r from-sky-300 to-indigo-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                      {step.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">{step.title}</h4>
                    <p className="mt-4 text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-sky-300 to-indigo-300 relative overflow-hidden">
  
  {/* background paw image */}
  <div 
    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: "url('/background-paws.png')",
    }}
  ></div>

  {/* existing grid overlay */}
  <div className="absolute inset-0 bg-grid-white/10"></div>

  {/* Your content */}
  <div className="container mx-auto px-6 text-center relative z-10">
    <h3 className="text-4xl font-bold mb-6 text-white">
      Ready to Find Your New Best Friend?
    </h3>
    <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
      Start making mindful decisions and adopt responsibly.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link href="pages/signup" 
        className="group bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
        Sign Up for Free
        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link href="/shelters" 
        className="group bg-blue-700/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
        Explore Shelters
      </Link>

      <MascotButton onClick={() => setChatOpen(true)} />
      <ChatbotModal isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </div>
  </div>

</section>


    </div>
  );
}
