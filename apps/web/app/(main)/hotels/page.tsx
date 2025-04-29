"use client"; // WILL JUST KEEP IT AS IT

import Image from "next/image";

const hotels = [
  {
    id: 1,
    name: "Royal Palace of Safarukaidha",
    summary: "Luxurious getaway in Maldives",
    image: "/hotels/hotel1.jpg" , // WILL REPLACE WITH A REAL IMAGE
    rating: 4.8,
  },
  {
    id: 2,
    name: "Island Breeze Resort",
    summary: "Perfect family vacation spot",
    image:"/hotels/hotel2.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Coral Paradise",
    summary: "Snorkeling and beach activities",
    image: "/hotels/hotel3.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Coral Paradise",
    summary: "Snorkeling and beach activities",
    image: "/hotels/hotel4.jpg",
    rating: 4.3,
  },
  {
    id: 5,
    name: "Coral Paradise",
    summary: "Snorkeling and beach activities",
    image: "/hotels/hotel5.jpg",
    rating: 3.2,
  },
  {
    id: 6,
    name: "Coral Paradise",
    summary: "Snorkeling and beach activities",
    image: "/hotels/hotel6.jpg",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Coral Paradise",
    summary: "Snorkeling and beach activities",
    image: "/hotels/hotel7.jpg",
    rating: 3.7,
  },
];

function HotelCard({ hotel }: { hotel: any }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <Image
        src={hotel.image}
        alt={hotel.name}
        width={400}
        height={250}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
        <p className="text-gray-600 text-sm">{hotel.summary}</p>
        <p className="mt-2 text-yellow-500 font-semibold">⭐ {hotel.rating}</p>
        <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
}

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white ">Hotels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
