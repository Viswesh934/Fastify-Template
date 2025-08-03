import { FastifyPluginAsync } from "fastify";
import { loginHandler } from "@api/controllers/authController";

export const loginRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post("/login", {
    schema: {
      body: {
        type: "object",
        properties: {
          username: { type: "string", minLength: 1 },
          password: { type: "string", minLength: 6 },
        },
        required: ["username", "password"],
      },
    },
    handler: loginHandler,
  });
};
