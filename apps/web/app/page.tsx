import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-semibold">MEDHUGIRI</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              Gallery
            </a>
            <a href="#" className="hover:text-primary">
              Hotels
            </a>
          </div>
          <button className="px-4 py-2 rounded-full bg-primary text-white">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg" // You'll need to add this image
            alt="Medhugiri Resort"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-semibold mb-4">Welcome To</h1>
          <h2 className="text-7xl font-bold mb-6">MEDHUGIRI</h2>
          <p className="text-xl">a haven for luxury adventure and family</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/about-image.jpg" // You'll need to add this image
              alt="Resort View"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">ABOUT US</h2>
            <p className="text-gray-600">
              Nestled in a breathtaking Maldives, our resort offers an
              unforgettable getaway for families seeking relaxation, excitement,
              and quality time together. Our luxurious accommodations,
              world-class amenities, and tailored activities cater to all ages,
              ensuring an unforgettable experience for kids and adults alike.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto grid grid-cols-3 gap-8">
          {/* Easy Transaction */}
          <div className="text-center p-6">
            <div className="mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-3">Easy Transaction</h3>
            <p className="text-gray-600">
              Enjoy convenient transportation to and from the resort, as well as
              around the surrounding area, making it easy to explore everything
              our destination has to offer.
            </p>
          </div>

          {/* Instant Reservation */}
          <div className="text-center p-6">
            <div className="mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-3">Instant Reservation</h3>
            <p className="text-gray-600">
              Book your dream vacation in just a few clicks with our instant
              reservation system, available 24/7.
            </p>
          </div>

          {/* Theme Park */}
          <div className="text-center p-6">
            <div className="mb-4">😊</div>
            <h3 className="text-xl font-semibold mb-3">Theme Park</h3>
            <p className="text-gray-600">
              Experience thrill and wonder at our on-site theme park, featuring
              a variety of exciting rides, spectacular live shows, and
              attractions that are fun for all ages, from kids to adults.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
