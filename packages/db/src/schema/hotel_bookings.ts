import { pgTable, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { roomsTable } from "./rooms";
import { customersTable } from "./customers";
import { ferriesTable } from "./ferries";
import { relations } from "drizzle-orm";
import { themeParkBookingsTable } from "./theme_park_bookings";

export const hotelBookingsTable = pgTable("hotel_bookings", {
  id: serial("id").primaryKey(),
  roomId: integer("room_id").references(() => roomsTable.id),
  ferryId: integer("ferry_id").references(() => ferriesTable.id),
  customerId: integer("customer_id").references(() => customersTable.id),
  checkInDate: timestamp("check_in_date").notNull(),
  checkOutDate: timestamp("check_out_date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const bookingsRelations = relations(hotelBookingsTable, ({ one }) => ({
  room: one(roomsTable, {
    fields: [hotelBookingsTable.roomId],
    references: [roomsTable.id],
  }),
  ferry: one(ferriesTable, {
    fields: [hotelBookingsTable.ferryId],
    references: [ferriesTable.id],
  }),
  customer: one(customersTable, {
    fields: [hotelBookingsTable.customerId],
    references: [customersTable.id],
  }),
  themeParkBookings: one(themeParkBookingsTable, {
    fields: [hotelBookingsTable.id],
    references: [themeParkBookingsTable.hotelBookingId],
  }),
}));
