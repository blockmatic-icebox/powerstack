import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from './schema/types';
const prisma = new PrismaClient()
export interface Context {
  prisma: PrismaClient
  request?: FastifyRequest,
  reply?: FastifyReply,
  user?: User,
}

export const context: Context = {
  prisma: prisma,
}