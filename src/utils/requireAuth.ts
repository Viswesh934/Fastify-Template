import { FastifyRequest, FastifyReply } from "fastify";
import jwt, { JwtPayload } from "jsonwebtoken";

// Define the JWT payload interface
interface CustomJwtPayload extends JwtPayload {
  userId: string;
  username: string;
  tenant: string;
}

declare module "fastify" {
  interface FastifyRequest {
    user?: {
      id: string;
      username: string;
      tenant: string;
    };
  }
}

export const requireAuth = async (request: FastifyRequest, reply: FastifyReply) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return reply.status(401).send({
      success: false,
      message: "Missing or invalid Authorization header",
    });
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not set.");
  }

  try {
    const decoded = jwt.verify(token as string, secret) as CustomJwtPayload;

    // Check if decoded token has required properties
    if (decoded && decoded.userId && decoded.username && decoded.tenant) {
      request.user = {
        id: decoded.userId,
        username: decoded.username,
        tenant: decoded.tenant,
      };
    } else {
      return reply.status(401).send({
        success: false,
        message: "Invalid token payload",
      });
    }
  } catch (err) {
    request.log.error("JWT verification failed:", err);
    return reply.status(401).send({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
