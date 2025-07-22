import type { db } from "./db";

declare module "fastify" {
  interface FastifyRequest {
    db: typeof db;
  }
}
