"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const hotels = [
  {
    id: 1,
    name: "Royal Palace of Safarukaidha",
    summary: "Experience unmatched luxury and breathtaking views, located in the heart of an island paradise.",
    mainImage: "/hotels/hotel1.jpg",
    gallery: ["/hotels/hotel1.jpg", "/hotels/hotel2.jpg"],
    amenities: ["Gym", "Breakfast Included", "Housekeeping"],
    rating: 4.8,
    location: "North Korea",
  },
  {
    id: 2,
    name: "Island Breeze Resort",
    summary: "Enjoy a peaceful family retreat with stunning beaches, great hospitality, and unforgettable adventures.",
    mainImage: "/hotels/hotel2.jpg",
    gallery: ["/hotels/hotel2.jpg", "/hotels/hotel3.jpg"],
    amenities: ["Pool", "Spa", "Free Wi-Fi"],
    rating: 4.5,
    location: "Maldives",
  },
];

export default function HotelDetailPage() {
  const { hotelId } = useParams();
  const hotel = hotels.find((h) => h.id === Number(hotelId));

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Hotel not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Cover Image */}
      <div className="relative w-full h-[450px]">
        <Image
          src={hotel.mainImage}
          alt={hotel.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{hotel.name}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Summary + Rating */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{hotel.summary}</h2>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-yellow-500 text-2xl mr-2">⭐</span>
            <span className="text-xl font-semibold">{hotel.rating}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Amenities</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600">
            {hotel.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>✔️</span> {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotel.gallery.map((img, index) => (
              <div key={index} className="relative w-full h-56 overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={`Gallery Image ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Location</h3>
          <p className="text-gray-600 mb-4">{hotel.location}</p>
          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
            🗺️ Map Placeholder
          </div>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
