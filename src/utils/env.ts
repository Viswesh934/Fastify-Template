/* eslint-disable @typescript-eslint/naming-convention */
import { z } from "zod";
// eslint-disable-next-line import/no-unassigned-import
import "dotenv/config";

const envSchema = z.object({
  DATABASE_URL: z.string().default("postgres://postgres:viswesh@localhost:5432/Test"),
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default("127.0.0.1"),
});

export const env = envSchema.parse(process.env);
