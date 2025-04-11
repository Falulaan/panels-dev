import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { hotels } from "./hotels";
import { relations } from "drizzle-orm";
import { hotel_bookings } from "./hotel_bookings";

export const ferries = pgTable("ferries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  hotelId: integer("hotel_id").references(() => hotels.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const ferriesRelations = relations(ferries, ({ one, many }) => ({
  hotel: one(hotels, {
    fields: [ferries.hotelId],
    references: [hotels.id],
  }),
  bookings: many(hotel_bookings),
}));
