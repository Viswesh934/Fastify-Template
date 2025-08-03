import { type Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default {
  schema: "./drizzle/schema.ts",
  strict: false,
  verbose: true,
  schemaFilter: ["ppl_first"],
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ??
      (() => {
        throw new Error("DATABASE_URL is not set");
      })(),
  },
} satisfies Config;
