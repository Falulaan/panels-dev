import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
  time,
} from "drizzle-orm/pg-core";
import { hotel_providers } from "./hotel_providers";
import { relations } from "drizzle-orm";
import { ferries } from "./ferries";
import { rooms } from "./rooms";

export const hotels = pgTable("hotels", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  checkInTime: time("check_in_time").notNull(), // Usual check in time
  deptTime: time("dept_time").notNull(), // Usual dept time
  deptLocation: varchar("dept_location", { length: 255 }).notNull(),
  hotelProviderId: integer("hotel_provider_id").references(
    () => hotel_providers.id
  ),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const hotelsRelations = relations(hotels, ({ one, many }) => ({
  hotelProvider: one(hotel_providers, {
    fields: [hotels.hotelProviderId],
    references: [hotel_providers.id],
  }),
  ferries: many(ferries),
  rooms: many(rooms),
}));
