import { z } from "zod";

import "dotenv/config";

const envSchema = z.object({
  DATABASE_URL: z.string().default("postgres://postgres:password@localhost:5432/Test"),
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default("127.0.0.1"),
});

export const env = envSchema.parse(process.env);
