import { FastifyRequest, FastifyReply } from "fastify";
import { loginSchema } from "../schemas/loginSchema";
import { authenticateUser } from "../services/authService";
import { z } from "zod";

export const loginHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { username, password } = loginSchema.parse(request.body);
    const authResult = await authenticateUser(username, password);

    return reply.send({
      success: true,
      data: authResult,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
      return reply.status(401).send({ success: false, message: "Invalid credentials" });
    }

    if (error instanceof Error && error.message === "ACCOUNT_DISABLED") {
      return reply.status(401).send({ success: false, message: "Account is disabled" });
    }

    if (error instanceof z.ZodError) {
      return reply.status(400).send({ success: false, message: "Validation error", errors: error.errors });
    }

    request.log.error(error);
    return reply.status(500).send({ success: false, message: "Internal server error" });
  }
};
