import { db } from "@api/db";
import { usermasterInPplFirst } from "@api/database/tables";
import { hash } from "bcrypt";
import { AddUserInput } from "../schemas/addUserSchema";

export const createUser = async (input: AddUserInput) => {
  const hashedPassword = await hash(input.password, 10);

  const [newUser] = await db.insert(usermasterInPplFirst).values({
    login: input.login,
    password: hashedPassword,
    tenant: input.tenant,
    companyId: input.companyId,
    isactive: true,
    createduser: input.createduser,
    createdtenant: input.tenant,
  } as any).returning();

  return newUser;
};
