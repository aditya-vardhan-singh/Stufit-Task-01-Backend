import { User } from "@prisma/client";
import { NotFoundError } from "@/errors";
import { prisma } from "@/libs";

/**
 * Fetches a user by email from the database.
 * @param {string} email - The email of the user to fetch.
 * @returns {Promise<User>} - The user object if found.
 * @throws {NotFoundError} - If no user is found with the given email.
 */
export const fetchUser = async (email: string): Promise<User> => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return user;
};

export const updatePassword = async (
  userId: string,
  hashedPassword: string
): Promise<void> => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });
};
