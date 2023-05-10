import {
    mutationType,
    queryType,
    objectType,
    inputObjectType,
    extendType,
    intArg,
    arg,
    stringArg,
    nonNull,
} from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';
import { createError } from '@fastify/error';
import { Task, TaskInput } from './task';
import { Comment, CommentInput } from './comment';
import { Context } from '../context';
import { getUserIdFromContext } from '../utils/userHelpers';
import bcrypt from 'bcryptjs';

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('id');
        t.string('password');
        t.field('createdAt', { type: 'DateTime' });
        t.field('updatedAt', { type: 'DateTime' });
        t.string('email');
        t.string('name');
        t.string('firstName');
        t.string('lastName');
        t.string('middleName');

        t.list.field('tasksCreated', {
            type: Task,
            description: 'Tasks created by the user',
            resolve: (parent, _, context) =>
                context.prisma.task.findMany({ where: { createdById: parent.id as any } }),
        });
        t.list.field("tasks", {
            type: Task,
            description: "Tasks assigned to the user",
            resolve: async (parent, _, context) => {
                const userTasks = await context.prisma.userTask.findMany({
                    where: {
                        userId: parent.id as any,
                        taskRole: {
                            role: "assignee",
                        },
                    },
                    include: {
                        task: true,
                    },
                });

                return userTasks.map((userTask: any) => userTask.task);
            },
        });

        t.list.field("comments", {
            type: Comment,
            description: "Comments by the user",
            resolve: (parent, _, context) => {
                return context.prisma.comment.findMany({
                    where: { authorId: parent.id as any},
                });
            },
        });
    },
});


export const UserInput = inputObjectType({
    name: 'UserInput',
    definition(t) {
        t.string('id');
        t.string('email');
        t.string('password');
        t.string('name');
        t.string('firstName');
        t.string('lastName');
        t.string('middleName');
    },
});


export const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createUser', {
            type: User,
            args: {
                data: nonNull(
                    arg({
                        type: UserInput,
                    }),
                ),
            },
            resolve(_root, args, ctx) {
                return ctx.prisma.user.create({
                    data: {
                        email: args.data.email as any,
                        password: args.data.password as any,
                        name: args.data.name as any,
                        firstName: args.data.firstName as any,
                        lastName: args.data.lastName as any,
                        middleName: args.data.middleName as any,
                    },
                });
            },
        });

        t.field('updateUser', {
            type: 'User',
            args: {
                id: nonNull(
                    arg({
                        type: 'String',
                    }),
                ),
                data: nonNull(
                    arg({
                        type: UserInput,
                    }),
                ),
            },
            resolve(_root, args, ctx) {
                return ctx.prisma.user.update({
                    where: {
                        id: args.id as any,
                    },
                    data: {
                        email: args.data.email as any,
                        password: args.data.password as any,
                        name: args.data.name as any,
                        firstName: args.data.firstName as any,
                        lastName: args.data.lastName as any,
                        middleName: args.data.middleName as any,
                        updatedAt: new Date(),
                    },
                });
            },
        });

        t.field('deleteUser', {
            type: 'User',
            args: {
                id: nonNull(
                    arg({
                        type: 'String',
                    }),
                ),
            },
            resolve(_root, args, ctx) {
                return ctx.prisma.user.delete({
                    where: {
                        id: args.id as any,
                    },
                });
            },
        });
    },
});

export const UserQuery = extendType({
    type: 'Query',
    definition(t) {
        t.field('user', {
            type: User,
            args: {
                id: nonNull(
                    arg({
                        type: 'String',
                    }),
                ),
            },
            resolve(_root, args, ctx) {
                return ctx.prisma.user.findUnique({
                    where: { id: args.id as any },
                });
            },
        });

        t.list.field('users', {
            type: User,
            resolve(_root, _args, ctx) {
                return ctx.prisma.user.findMany();
            },
        });
    },
});