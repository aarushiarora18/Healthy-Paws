// /app/api/vets/route.js (for Next.js 13+ using app directory)
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
  
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=veterinary_care&key=${apiKey}`
    );
  
    const data = await response.json();
  
    return Response.json(data.results); // returns only results
  }
  