import { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import { db } from "@api/db";
import { usermasterInPplFirst } from "../../database/tables";
import { hash } from "bcrypt";
import { requireAuth } from "@api/utils";


// Input validation schema
const addUserSchema = z.object({
  login: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  tenant: z.string().uuid("Invalid tenant ID"),
  companyId: z.string().uuid("Invalid company ID"),
  createduser: z.string().uuid("Invalid user ID"),
});


export const addUserRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    "/user",
    {
      preHandler: requireAuth,
      schema: {
        body: {
          type: 'object',
          properties: {
            login: { type: 'string', format: 'email' },
            password: { type: 'string', minLength: 6 },
            tenant: { type: 'string', format: 'uuid' },
            companyId: { type: 'string', format: 'uuid' },
            createduser: { type: 'string', format: 'uuid' },
          },
          required: ['login', 'password', 'tenant', 'companyId']
        },
      },
    },
    async (request, reply) => {
      try {
        const { login, password, tenant, companyId,createduser } = addUserSchema.parse(request.body);

        // Hash password
        const hashedPassword = await hash(password, 10);

        // Insert user
        const newUser = await db.insert(usermasterInPplFirst).values({
          login,
          password: hashedPassword,
          tenant,
          companyId,
          isactive: true,
          createduser, 
          createdtenant: tenant,
        } as any).returning();

        return reply.status(201).send({
          success: true,
          data: newUser[0],
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
        console.error("Error adding user:", error);
        return reply.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    }
  );
};
