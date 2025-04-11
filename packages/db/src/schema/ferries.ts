import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { hotelsTable } from "./hotels";
import { relations } from "drizzle-orm";
import { hotelBookingsTable } from "./hotel_bookings";

export const ferriesTable = pgTable("ferries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  hotelId: integer("hotel_id").references(() => hotelsTable.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const ferriesRelations = relations(ferriesTable, ({ one, many }) => ({
  hotel: one(hotelsTable, {
    fields: [ferriesTable.hotelId],
    references: [hotelsTable.id],
  }),
  bookings: many(hotelBookingsTable),
}));
