import { admin_users } from "../schema";
import { db } from "@repo/db";

export async function seedAdminUsers() {
  await db.insert(admin_users).values({
    email: "test@example.com",
    password: "password",
  });
}
