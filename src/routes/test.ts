import type { FastifyInstance } from "fastify";
import { Logger } from "@api/utils";

export const testRoutes = (fastify: FastifyInstance, _: unknown, done: () => void) => {
  fastify.get("/", async (request, response) => {
    Logger.info("Hello world route was hit", request.method);
    response.send({
      hello: "world",
    });
  });

  done();
};
