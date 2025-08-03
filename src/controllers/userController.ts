import { FastifyRequest, FastifyReply } from "fastify";
import { addUserSchema } from "@api/schemas/addUserSchema";
import { createUser } from "@api/services/userService";
import { z } from "zod";

export const addUserHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const data = addUserSchema.parse(request.body);
    const newUser = await createUser(data);

    return reply.status(201).send({
      success: true,
      data: newUser,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply.status(400).send({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    }

    request.log.error(error);
    return reply.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
