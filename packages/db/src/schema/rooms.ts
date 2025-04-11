import { pgTable, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { hotelsTable } from "./hotels";
import { relations } from "drizzle-orm";
import { hotelBookingsTable } from "./hotel_bookings";

export const roomsTable = pgTable("rooms", {
  id: serial("id").primaryKey(),
  adultsCapacity: integer("adults_capacity").notNull(),
  childrenCapacity: integer("children_capacity").notNull(),
  price: integer("price").notNull(),
  hotelId: integer("hotel_id").references(() => hotelsTable.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const roomsRelations = relations(roomsTable, ({ one, many }) => ({
  hotel: one(hotelsTable, {
    fields: [roomsTable.hotelId],
    references: [hotelsTable.id],
  }),
  bookings: many(hotelBookingsTable),
}));
