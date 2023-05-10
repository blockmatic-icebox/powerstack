import { FastifyRequest } from "fastify";
import { Context } from "../context";
import { User } from "../schema/types";

// Create an authentication function for Mercurius context
export const getUserId = async (request: FastifyRequest): Promise<string | undefined> => {
  const user = await getUser(request);
  return user?.id || undefined;
};

// Create an authentication function for Mercurius context
export const getUserIdFromContext = async (context: Context): Promise<String | undefined> => {

  return context.user?.id || undefined;
};


// Create an authentication function for Mercurius context
export async function getUser(request: FastifyRequest): Promise<User | undefined> {
  const userId = request.session.get('userId');
  if (!userId) {
    return undefined;
  }

  const context: Context = {
    prisma: request.server.prisma,
    request,
  };

  const user = await findUserById(context, userId as any);

  return user as any;
};

// Helper function to find a user by email
export const findUserByEmail = async (context: Context, email: string): Promise<User | undefined> => {
  return context.prisma.user.findUnique({
    where: {
      email: email,
    },
  }) as any;
};

// Helper function to find a user by id
export const findUserById = async (context: Context, id: string): Promise<User | undefined> => {
  return context.prisma.user.findUnique({
    where: {
      id: id,
    },
  }) as any;
};