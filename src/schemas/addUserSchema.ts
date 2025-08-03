import { z } from "zod";

export const addUserSchema = z.object({
  login: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  tenant: z.string().uuid("Invalid tenant ID"),
  companyId: z.string().uuid("Invalid company ID"),
  createduser: z.string().uuid("Invalid user ID"),
});

export type AddUserInput = z.infer<typeof addUserSchema>;
