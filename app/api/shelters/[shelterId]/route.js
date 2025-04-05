// app/api/shelters/[shelterId]/route.js

export async function GET(request, { params }) {
    const { shelterId } = params;
  
    const shelters = {
      '1': {
        id: 1,
        name: 'Sophie Memorial Animal Relief Trust',
        location: 'Greater Noida, Uttar Pradesh',
        image: '/shelter1.jpeg',
        description: 'Animal protection organization in Uttar Pradesh.',
        dogs: [
          {
            id: 'd1',
            name: 'Boomer',
            age: 2,
            breed: 'Rottweiler',
            image: '/dog1.jpeg'
          },
          {
            id: 'd2',
            name: 'Ghost',
            age: 2,
            breed: 'German Shepherd',
            image: '/dog2.jpeg'
          },
          {
            id: 'd3',
            name: 'Lailaa',
            age: 3,
            breed: 'Golden Retriever',
            image: '/dog3.jpeg'
          },
          {
            id: 'd4',
            name: 'Whiskey',
            age: 3,
            breed: 'Siberian Husky',
            image: '/dog4.jpeg'
          },
          {
            id: 'd5',
            name: 'Poppins',
            age: 2,
            breed: 'Pomeranian',
            image: '/dog5.png'
          },
          {
            id: 'd6',
            name: 'Daisy',
            age: 2.5,
            breed: 'Pomeranian',
            image: '/dog6.jpeg'
          },
          {
            id: 'd7',
            name: 'Boogey',
            age: 4,
            breed: 'Labrador Retriever',
            image: '/dog7.jpeg'
          },
          {
            id: 'd8',
            name: 'Wendy',
            age: 3,
            breed: '',
            image: '/dog8.jpeg'
          },
          {
            id: 'd9',
            name: 'Casey',
            age: 3,
            breed: 'Golden Retriever',
            image: '/dog9.jpeg'
          },
          {
            id: 'd10',
            name: '',
            age: 1,
            breed: '',
            image: '/dog10.jpeg'
          },
          {
            id: 'd11',
            name: 'Peepee',
            age: 0.5,
            breed: '',
            image: '/dog11.jpeg'
          }
        ]
      },
      '2': {
        id: 2,
        name: 'Home for wings and tails foundation',
        location: 'Greater Noida, Uttar Pradesh',
        image: '/shelter2.png',
        description: 'Safe haven for stray pups.',
        dogs: [
            {
                id: 'd12',
                name: 'Oscar',
                age: 3,
                breed: '',
                image: '/dog12.jpeg'
              }
        ]
      },
      // you can add more shelters here later
    };
  
    const shelter = shelters[shelterId];
  
    if (!shelter) {
      return new Response(JSON.stringify({ error: 'Shelter not found' }), {
        status: 404
      });
    }
  
    return new Response(JSON.stringify(shelter), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  