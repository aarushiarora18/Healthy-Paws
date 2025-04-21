// export async function GET() {
//     const shelters = [
//       {
//         id: 1,
//         name: 'Sophie Memorial Animal Relief Trust ',
//         location: 'Greater Noida, Uttar Pradesh',
//         image: '/shelter1.png',
//         description: 'Animal protection organization in Uttar Pradesh.'
//       },
//       {
//         id: 2,
//         name: 'Home for wings and tails foundation',
//         location: 'Greater Noida, Uttar Pradesh',
//         image: '/shelter2.png',
//         description: 'Safe haven for stray pups.'
//       },
//       {
//         id: 3,
//         name: 'Animal Rain Bashera',
//         location: 'Delhi',
//         image: '/shelter3.png',
//         description: 'Where wagging tails find homes.'
//       },
//       {
//         id: 4,
//         name: 'Save A Stray',
//         location: 'Noida, Uttar Pradesh',
//         image: '/shelter4.jpeg',
//         description: 'Where wagging tails find homes.'
//       },
//       {
//         id: 5,
//         name: 'Pamposh Foundation',
//         location: 'Asagarpur Jagir, Uttar Pradesh',
//         image: '/shelter5.png',
//         description: 'Where wagging tails find homes.'
//       },
//       {
//         id: 6,
//         name: "Nirvana-Posh's canine rescue & rehabilitation Unit",
//         location: 'Noida, Uttar Pradesh',
//         image: '/shelter6.png',
//         description: 'Where wagging tails find homes.'
//       }
//     ];
  
//     return new Response(JSON.stringify(shelters), { status: 200 });
//   }
  // /pages/api/shelters.js

  export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
  
    const apiKey = process.env.GOOGLE_API_KEY;
  
    if (!city) {
      return Response.json({ error: "City is required" }, { status: 400 });
    }
  
    const query = `animal shelter in ${city}`;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      query
    )}&key=${apiKey}`;
  
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
  
      if (data.status !== "OK") {
        console.error("Google Places API Error:", data.status, data.error_message);
        return Response.json({ error: "Failed to fetch shelters" }, { status: 500 });
      }
  
      return Response.json(data.results);
    } catch (error) {
      console.error("API Fetch Error:", error);
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
  