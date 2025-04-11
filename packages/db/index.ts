import * as schema from "./src/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "dotenv";

config({
  path: "../../.env",
});

if (!process.env.SUPABASE_URL) {
  throw new Error("SUPABASE_URL environment variable is required");
}

const pool = postgres(process.env.SUPABASE_URL);

export const db = drizzle(pool, { schema });
