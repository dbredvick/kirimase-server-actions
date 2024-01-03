import { db } from "@/lib/db/index";
import { type UserId, userIdSchema } from "@/lib/db/schema/users";

export const getUsers = async () => {
  const u = await db.user.findMany({});
  return { users: u };
};

export const getUserById = async (id: UserId) => {
  const { id: userId } = userIdSchema.parse({ id });
  const u = await db.user.findFirst({
    where: { id: userId}});
  return { users: u };
};

