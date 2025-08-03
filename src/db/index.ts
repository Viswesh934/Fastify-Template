import { Logger } from "@api/utils";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Database singleton instance
export let db: ReturnType<typeof drizzle>;

// Connection pool configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
});

// Handle pool errors
pool.on("error", (err) => {
  Logger.error("DATABASE", `Unexpected error on idle client: ${err.message}`);
  process.exit(-1);
});

export const initDb = async () => {
  try {
    // Test the connection
    const client = await pool.connect();
    client.release();
    Logger.info("DATABASE", "Successfully connected to PostgreSQL");

    // Initialize Drizzle
    db = drizzle(pool);

    return db;
  } catch (error) {
    Logger.error(
      "DATABASE",
      `Database initialization failed: ${error instanceof Error ? error.message : String(error)}`,
    );
    throw error;
  }
};

export const closeDb = async () => {
  try {
    await pool.end();
    Logger.info("DATABASE", "Database connection closed");
  } catch (error) {
    Logger.error(
      "DATABASE",
      `Error closing database connection: ${error instanceof Error ? error.message : String(error)}`,
    );
    throw error;
  }
};
