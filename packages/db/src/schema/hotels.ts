import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
  time,
} from "drizzle-orm/pg-core";
import { hotelProvidersTable } from "./hotel_providers";
import { relations } from "drizzle-orm";
import { ferriesTable } from "./ferries";
import { roomsTable } from "./rooms";

export const hotelsTable = pgTable("hotels", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  checkInTime: time("check_in_time").notNull(), // Usual check in time
  deptTime: time("dept_time").notNull(), // Usual dept time
  deptLocation: varchar("dept_location", { length: 255 }).notNull(),
  hotelProviderId: integer("hotel_provider_id").references(
    () => hotelProvidersTable.id
  ),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const hotelsRelations = relations(hotelsTable, ({ one, many }) => ({
  hotelProvider: one(hotelProvidersTable, {
    fields: [hotelsTable.hotelProviderId],
    references: [hotelProvidersTable.id],
  }),
  ferries: many(ferriesTable),
  rooms: many(roomsTable),
}));
