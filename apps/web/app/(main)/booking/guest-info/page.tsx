"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    adults: '',
    children: '',
    rooms: '',
    roomType: '',
    includeBreakfast: false,
    specialNotes: '',
    fullName: '',
    email: '',
    phone: '',
    country: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/booking/summary');
  };

  return (
    <div className="bg-black text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Booking Information</h1>

        {/* Check-in/out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="checkin" className="text-sm font-medium">Check-in Date</label>
            <Input id="checkin" name="checkin" type="date" value={form.checkin} onChange={handleChange} className="bg-white text-black" />
          </div>
          <div className="space-y-1">
            <label htmlFor="checkout" className="text-sm font-medium">Check-out Date</label>
            <Input id="checkout" name="checkout" type="date" value={form.checkout} onChange={handleChange} className="bg-white text-black" />
          </div>
        </div>

        {/* Guest Details */}
        <div className="bg-white text-black p-5 rounded-md space-y-3">
          <h2 className="text-lg font-semibold">Guest Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="adults" placeholder="Adults" value={form.adults} onChange={handleChange} />
            <Input name="children" placeholder="Children" value={form.children} onChange={handleChange} />
            <Input name="rooms" placeholder="Rooms" value={form.rooms} onChange={handleChange} />
            <Input name="roomType" placeholder="Room Type" value={form.roomType} onChange={handleChange} />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="includeBreakfast" checked={form.includeBreakfast} onChange={handleChange} />
            Include Breakfast
          </label>
          <Textarea name="specialNotes" placeholder="Special needs or requests" value={form.specialNotes} onChange={handleChange} />
        </div>

        {/* Personal Info */}
        <div className="bg-white text-black p-5 rounded-md space-y-3">
          <h2 className="text-lg font-semibold">Booking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
            <Input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
            <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            <Input name="country" placeholder="Country" value={form.country} onChange={handleChange} />
          </div>
          <Textarea name="additionalNotes" placeholder="Additional Notes" value={form.additionalNotes} onChange={handleChange} />
        </div>

        {/* Cost Summary */}
        <div className="bg-white text-black p-5 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Calculate Cost</h2>
          <p>Room Rate: USD $40/night</p>
          <p>Nights: 1</p>
          <p>Breakfast: {form.includeBreakfast ? '+ USD $10' : 'Not included'}</p>
          <p className="mt-2 font-bold">Total: USD $500</p>
        </div>

        {/* Submit + Proceed */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Button type="submit" className="bg-white text-black px-6 py-2 rounded-md font-semibold w-full md:w-auto">
            Previous menu
          </Button>
          <Button className="bg-white text-black px-6 py-2 rounded-md font-semibold w-full md:w-auto" onClick={() => router.push('/booking/confirmation')}>
            Proceed to Guest Information
          </Button>
        </div>
      </div>
    </div>
  );
}
