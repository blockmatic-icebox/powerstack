import { FastifyRequest } from "fastify";
import fastifyPassport from "@fastify/passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import { Context } from "./context";
import { findUserByEmail, findUserById } from "./utils/userHelpers";
import { IncomingMessage } from "http";

fastifyPassport.initialize();

fastifyPassport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    async (req: IncomingMessage, email, password, done) => {
      const request = req as unknown as FastifyRequest; // Cast IncomingMessage to FastifyRequest
      const context: Context = {
        prisma: request.server.prisma,
        request,
      };

      try {
        const user = await findUserByEmail(context, email);
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }
        const isPasswordValid = await bcrypt.compare(
          password,
          user.password as any
        );
        if (!isPasswordValid) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

const serializeUser: unknown = (
  request: FastifyRequest,
  user: User,
  done: any
) => {
  done(null, user.id, request);
};
fastifyPassport.serializeUser(serializeUser, {} as any);

const deserializeUser: unknown = async (
  request: FastifyRequest,
  userId: string,
  done: any
) => {
  try {
    const context: Context = {
      prisma: request.server.prisma,
      request,
    };

    const user = await findUserById(context, userId);

    if (!user) {
      throw new Error("User not found");
    }

    done(null, user);
  } catch (err) {
    done(err);
  }
};
fastifyPassport.deserializeUser(deserializeUser, {} as any);

export default fastifyPassport;
