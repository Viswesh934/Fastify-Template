import type { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { db } from "../db";

const middleware = fp(async (fastify: FastifyInstance) => {
  fastify.addHook("onRequest", async (request) => {
    request.db = db;
  });
});

export { middleware };
