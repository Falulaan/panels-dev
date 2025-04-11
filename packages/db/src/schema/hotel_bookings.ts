import { pgTable, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { rooms } from "./rooms";
import { customers } from "./customers";
import { ferries } from "./ferries";
import { relations } from "drizzle-orm";
import { themeParkBookingsTable } from "./theme_park_bookings";

export const hotel_bookings = pgTable("hotel_bookings", {
  id: serial("id").primaryKey(),
  roomId: integer("room_id").references(() => rooms.id),
  ferryId: integer("ferry_id").references(() => ferries.id),
  customerId: integer("customer_id").references(() => customers.id),
  checkInDate: timestamp("check_in_date").notNull(),
  checkOutDate: timestamp("check_out_date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const bookingsRelations = relations(hotel_bookings, ({ one }) => ({
  room: one(rooms, {
    fields: [hotel_bookings.roomId],
    references: [rooms.id],
  }),
  ferry: one(ferries, {
    fields: [hotel_bookings.ferryId],
    references: [ferries.id],
  }),
  customer: one(customers, {
    fields: [hotel_bookings.customerId],
    references: [customers.id],
  }),
  themeParkBookings: one(themeParkBookingsTable, {
    fields: [hotel_bookings.id],
    references: [themeParkBookingsTable.hotelBookingId],
  }),
}));
