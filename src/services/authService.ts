import { db } from "@api/db";
import { eq } from "drizzle-orm";
import { usermasterInPplFirst } from "../database/tables";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const authenticateUser = async (username: string, password: string) => {
  const user = await db
    .select()
    .from(usermasterInPplFirst)
    .where(eq(usermasterInPplFirst.login, username))
    .then((rows) => rows[0]);

  if (!user) throw new Error("INVALID_CREDENTIALS");
  if (!user.isactive) throw new Error("ACCOUNT_DISABLED");

  const isValid = await compare(password, user.password);
  if (!isValid) throw new Error("INVALID_CREDENTIALS");

  const token = jwt.sign(
    {
      userId: user.id,
      username: user.login,
      tenant: user.tenant,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "24h" },
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.login,
      tenant: user.tenant,
    },
  };
};
