import {
  pgTable,
  serial,
  timestamp,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { hotel_bookings } from "./hotel_bookings";

export const tierEnum = pgEnum("tier", [
  "bronze",
  "silver",
  "gold",
  "platinum",
]);

export const themeParkBookingsTable = pgTable("theme_park_bookings", {
  id: serial("id").primaryKey(),
  tier: tierEnum("tier").notNull(),
  hotelBookingId: integer("hotel_booking_id").references(
    () => hotel_bookings.id
  ),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const themeParkBookingsRelations = relations(
  themeParkBookingsTable,
  ({ one }) => ({
    hotelBooking: one(hotel_bookings, {
      fields: [themeParkBookingsTable.hotelBookingId],
      references: [hotel_bookings.id],
    }),
  })
);
