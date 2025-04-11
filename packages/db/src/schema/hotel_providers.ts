import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { hotels } from "./hotels";
import { relations } from "drizzle-orm";

export const hotel_providers = pgTable("hotel_providers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phone: varchar("phone", { length: 255 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const hotelProvidersRelations = relations(
  hotel_providers,
  ({ many }) => ({
    hotels: many(hotels),
  })
);
