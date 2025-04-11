import { pgTable, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { hotels } from "./hotels";
import { relations } from "drizzle-orm";
import { hotel_bookings } from "./hotel_bookings";

export const rooms = pgTable("rooms", {
  id: serial("id").primaryKey(),
  adultsCapacity: integer("adults_capacity").notNull(),
  childrenCapacity: integer("children_capacity").notNull(),
  price: integer("price").notNull(),
  hotelId: integer("hotel_id").references(() => hotels.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const roomsRelations = relations(rooms, ({ one, many }) => ({
  hotel: one(hotels, {
    fields: [rooms.hotelId],
    references: [hotels.id],
  }),
  bookings: many(hotel_bookings),
}));
