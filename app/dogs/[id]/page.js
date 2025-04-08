// //app/dog/[id]/page.js
// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function DogProfile() {
//   const { id } = useParams();
//   const [dog, setDog] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     experience: "",
//     reason: "",
//   });

//   useEffect(() => {
//     const fetchDog = async () => {
//       try {
//         const res = await fetch(`/api/dogs/${id}`);
//         if (!res.ok) throw new Error("Dog not found");
//         const data = await res.json();
//         setDog(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchDog();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("/api/apply", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         dogId: id,
//         ...formData,
//       }),
//     });

//     if (response.ok) {
//       alert("Application sent! 💌 We'll get back to you soon!");
//       setShowForm(false);
//     } else {
//       alert("Something went wrong 😞");
//     }
//   };

//   if (!dog) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6 md:flex gap-8">
//       <div className="md:w-1/2">
//         <img src={dog.image} alt={dog.name} className="rounded-lg w-full" />
//       </div>
//       <div className="md:w-1/2">
//         <h1 className="text-4xl font-bold mb-2">{dog.name}</h1>
//         <span
//           className={`inline-block px-3 py-1 text-sm font-semibold rounded-full w-fit mb-4 ${
//             dog.status === "Available"
//               ? "bg-green-100 text-green-800"
//               : dog.status === "Adopted"
//               ? "bg-gray-300 text-gray-700"
//               : "bg-yellow-100 text-yellow-800"
//           }`}
//         >
//           {dog.status}
//         </span>
//         <p className="text-xl text-gray-700 mb-2">Breed: {dog.breed}</p>
//         <p className="text-xl text-gray-700 mb-4">Age: {dog.age} years</p>

//         {dog.status === "Available" && (
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition mb-6"
//           >
//             Apply for Adoption
//           </button>
//         )}

//         {showForm && (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Your Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div>
//               <input
//                 name="phone"
//                 type="text"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div>
//               <input
//                 name="address"
//                 type="text"
//                 placeholder="Home Address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="experience"
//                 placeholder="Tell us about your experience with pets"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="reason"
//                 placeholder="Why do you want to adopt this dog?"
//                 value={formData.reason}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
//             >
//               Submit Application
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DogProfile() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ reason: "" });

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const res = await fetch(`/api/dogs/${id}`);
        if (!res.ok) throw new Error("Dog not found");
        const data = await res.json();
        setDog(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/apply", {
      method: "POST",
      body: JSON.stringify({
        dogId: id,
        reason: formData.reason,
      }),
    });

    if (response.ok) {
      alert("Application sent! 💌");
      setShowForm(false);
    } else {
      alert("Something went wrong 😞");
    }
  };

  if (!dog) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 md:flex gap-8">
      <div className="md:w-1/2">
        <img src={dog.image} alt={dog.name} className="rounded-lg w-full" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-2">{dog.name}</h1>
        <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full w-fit mb-2 ${
            dog.status === "Available"
              ? "bg-green-100 text-green-800"
              : dog.status === "Adopted"
              ? "bg-gray-300 text-gray-700"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {dog.status}
        </span>
        <p className="text-xl text-gray-700 mb-1">Breed: {dog.breed || "Unknown"}</p>
        <p className="text-lg text-gray-500 mb-1">Age: {dog.age} years</p>
        <p className="text-md text-gray-600 mb-4 italic">🏡 Shelter: {dog.shelter || "Unknown shelter"}</p>

        {!showForm ? (
          dog.status === "Available" ? (
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 px-6 py-3 bg-pink-600 text-white text-lg rounded-lg w-fit"
            >
              Apply for Adoption
            </button>
          ) : (
            <p className="mt-4 text-red-500 font-medium">This dog is not available for adoption.</p>
          )
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
            <textarea
              placeholder="Why do you want to adopt?"
              value={formData.reason}
              onChange={(e) =>
                setFormData({ ...formData, reason: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg self-start"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}