export async function GET() {
    const shelters = [
      {
        id: 1,
        name: 'Sophie Memorial Animal Relief Trust ',
        location: 'Greater Noida, Uttar Pradesh',
        image: '/shelter1.png',
        description: 'Animal protection organization in Uttar Pradesh.'
      },
      {
        id: 2,
        name: 'Home for wings and tails foundation',
        location: 'Greater Noida, Uttar Pradesh',
        image: '/shelter2.png',
        description: 'Safe haven for stray pups.'
      },
      {
        id: 3,
        name: 'Animal Rain Bashera',
        location: 'Delhi',
        image: '/shelter3.png',
        description: 'Where wagging tails find homes.'
      },
      {
        id: 4,
        name: 'Save A Stray',
        location: 'Noida, Uttar Pradesh',
        image: '/shelter4.jpeg',
        description: 'Where wagging tails find homes.'
      },
      {
        id: 5,
        name: 'Pamposh Foundation',
        location: 'Asagarpur Jagir, Uttar Pradesh',
        image: '/shelter5.png',
        description: 'Where wagging tails find homes.'
      },
      {
        id: 6,
        name: "Nirvana-Posh's canine rescue & rehabilitation Unit",
        location: 'Noida, Uttar Pradesh',
        image: '/shelter6.png',
        description: 'Where wagging tails find homes.'
      }
    ];
  
    return new Response(JSON.stringify(shelters), { status: 200 });
  }
  