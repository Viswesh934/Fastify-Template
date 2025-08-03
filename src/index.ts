import "dotenv/config";
import { initDb } from "@api/db";
import { testRoutes } from "@api/routes";
import { addUserRoute, loginRoute } from "@api/routes";
import { Logger } from "@api/utils";
import fastify from "fastify";
import { middleware } from "./plugins/middleware";

const API_VERSION = "v1";

export const main = async () => {
  const server = fastify({
    bodyLimit: 1_000_000,
    trustProxy: true,
  });

  await initDb();

  server.register(middleware);
  server.register(import("@fastify/cors"), {
    maxAge: 600,
    origin: true,
    credentials: true,
  });

  // Routes
  server.register(testRoutes, {
    prefix: `/${API_VERSION}/test`,
  });
  server.register(addUserRoute, {
    prefix: `/${API_VERSION}`,
  });
  server.register(loginRoute, {
    prefix: `/${API_VERSION}`,
  });

  const host = process.env.HOST || "127.0.0.1";
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  server.listen({ host, port }, (error, address) => {
    if (error) {
      Logger.error("INIT", error.message);
      throw new Error(error.message);
    }

    Logger.info("INIT", `Server listening at ${address}`);
  });

  return server;
};

main();
