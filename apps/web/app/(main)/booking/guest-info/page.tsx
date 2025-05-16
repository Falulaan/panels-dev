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
    // TODO: Add actual form processing logic
    router.push('/booking/summary');
  };

  return (
    <div className="p-6 md:p-10 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Booking Information</h1>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6">
        {/* Dates */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <Input name="checkin" value={form.checkin} onChange={handleChange} type="date" placeholder="Check-in Date" />
          <Input name="checkout" value={form.checkout} onChange={handleChange} type="date" placeholder="Check-out Date" />
        </div>

        {/* Guest Details */}
        <div className="border p-4 rounded-md md:col-span-1">
          <h2 className="font-semibold mb-4">Guest Details</h2>
          <div className="grid gap-3">
            <Input name="adults" value={form.adults} onChange={handleChange} placeholder="Adults" />
            <Input name="children" value={form.children} onChange={handleChange} placeholder="Children" />
            <Input name="rooms" value={form.rooms} onChange={handleChange} placeholder="Rooms" />
            <Input name="roomType" value={form.roomType} onChange={handleChange} placeholder="Room Type" />
            <label className="flex items-center gap-2">
              <input name="includeBreakfast" type="checkbox" checked={form.includeBreakfast} onChange={handleChange} />
              Include Breakfast
            </label>
            <Textarea name="specialNotes" value={form.specialNotes} onChange={handleChange} placeholder="Special needs or requests" />
          </div>
        </div>

        {/* Booking Info */}
        <div className="border p-4 rounded-md md:col-span-1">
          <h2 className="font-semibold mb-4">Booking Information</h2>
          <div className="grid gap-3">
            <Input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" />
            <Input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" />
            <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
            <Input name="country" value={form.country} onChange={handleChange} placeholder="Country" />
            <Textarea name="additionalNotes" value={form.additionalNotes} onChange={handleChange} placeholder="Additional Notes" />
            <Button type="submit" className="w-full">Submit Booking</Button>
          </div>
        </div>

        {/* Summary */}
        <div className="border p-4 rounded-md md:col-span-1">
          <h2 className="font-semibold mb-2">Calculate Cost</h2>
          <p>Room Rate: USD $40/night</p>
          <p>Nights: 1</p>
          <p>Breakfast: {form.includeBreakfast ? '+ USD $10' : 'Not included'}</p>
          <p className="mt-2 font-bold">Total: USD $500</p>
        </div>

        {/* Proceed */}
        <div className="md:col-span-3 flex justify-end">
          <Button type="submit" variant="default">Proceed to Guest Information</Button>
        </div>
      </form>
    </div>
  );
}
