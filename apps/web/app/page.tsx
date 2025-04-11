import Image from "next/image";
import { Button } from "@repo/ui/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Medhugiri Resort"
            fill
            className="object-cover brightness-75 blur-[2px]"
            priority
          />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        {/* Navigation - Moved inside hero section */}
        <nav className="absolute top-0 left-0 right-0 z-50">
          <div className="container mx-auto flex items-center justify-between py-6">
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-white hover:text-white/80 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm text-white hover:text-white/80 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#"
                className="text-sm text-white hover:text-white/80 transition-colors"
              >
                Hotels
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-6 text-white border-white bg-teal-900/30 py-2 hover:bg-white/20"
            >
              Log in
            </Button>
          </div>
        </nav>

        <div className="container mx-auto relative h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-light mb-2">Welcome To</h1>
          <h2 className="text-6xl font-semibold tracking-wide mb-3">
            MEDHUGIRI
          </h2>
          <p className="text-lg font-light">
            a haven for luxury adventure
            <br />
            and family.
          </p>
          <div className="absolute bottom-12 flex flex-col items-center animate-bounce">
            <ChevronDown size={36} strokeWidth={1} />
            <ChevronDown size={36} strokeWidth={1} className="-mt-5" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto grid grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about-image.jpg"
              alt="Resort View"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">ABOUT US</h2>
            <p className="text-gray-600 leading-relaxed">
              Nestled in a breathtaking{" "}
              <span className="font-medium">Maldives</span>, our resort offers
              an unforgettable getaway for families seeking relaxation,
              excitement, and quality time together. Our luxurious
              accommodations, world-class amenities, and tailored activities
              cater to all ages, ensuring an unforgettable experience for kids
              and adults alike.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <Image
            src="/features-bg.jpg"
            alt="Features Background"
            fill
            className="object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto grid grid-cols-3 gap-12 relative">
          {/* Easy Transportation */}
          <div className="text-center text-white">
            <div className="mb-6">
              <Image
                src="/icons/transport.svg"
                alt="Transport"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium mb-4">Easy Transportation</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Enjoy convenient transportation to and from the resort, as well as
              around the surrounding area, making it easy to explore everything
              our destination has to offer.
            </p>
          </div>

          {/* Instant Reservation */}
          <div className="text-center text-white">
            <div className="mb-6">
              <Image
                src="/icons/calendar.svg"
                alt="Calendar"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium mb-4">Instant reservation</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Book your dream vacation in just a few clicks with our instant
              reservation system, available 24/7. Secure your dates and
              accommodations quickly and easily, and start looking forward to
              your family's luxury getaway.
            </p>
          </div>

          {/* Theme Park */}
          <div className="text-center text-white">
            <div className="mb-6">
              <Image
                src="/icons/smile.svg"
                alt="Smile"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium mb-4">Theme park</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
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
