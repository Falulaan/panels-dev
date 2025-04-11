import { db } from "../..";
import { admin_users } from "../schema";
import { seedAdminUsers } from "./admin_users";

async function seed() {
  console.log("Starting database seeding...");

  try {
    console.log("Cleaning existing admin users data...");
    await db.delete(admin_users);

    console.log("Seeding admin users...");
    await seedAdminUsers();

    console.log("Database seeding completed.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
