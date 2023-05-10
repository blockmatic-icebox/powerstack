import { objectType, extendType, nonNull, stringArg, arg, inputObjectType } from 'nexus';
import { Task, TaskInput } from './task';
import { User, UserInput } from './user';
import { TaskRole, TaskRoleInput } from './taskRole';
import { getUserIdFromContext } from '../utils/userHelpers';

export const UserTask = objectType({
    name: 'UserTask',
    definition(t) {
        t.string('id');
        t.string('createdById');
        t.field('createdAt', { type: 'DateTime' });
        t.field('updatedAt', { type: 'DateTime' });
        t.nullable.string('userId');
        t.nullable.string('taskId');
        t.nullable.string('taskRoleId');
        t.nullable.field('user', { type: User });
        t.nullable.field('task', { type: Task });
        t.nullable.field('taskRole', { type: TaskRole });
    },
});
export const UserTaskInput = inputObjectType({
    name: 'UserTaskInput',
    definition(t) {
        t.string('id');
        t.nullable.field('user', { type: UserInput });
        t.nullable.field('task', { type: TaskInput });
        t.nullable.field('taskRole', { type: TaskRoleInput });
        t.nullable.field('task', { type: TaskInput });
        t.string('createdById');
    },
});

export const UserTaskQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('userTasks', {
            type: UserTask,
            async resolve(_root, _args, ctx) {
                const currentUserId = await getUserIdFromContext(ctx);
                return ctx.prisma.userTask.findMany({
                    where: {
                        userId: currentUserId as any,
                    },
                });
            },
        });

        t.field('userTaskById', {
            type: UserTask,
            args: {
                id: nonNull(stringArg()),
            },
            async resolve(_root, args, ctx) {
                const currentUserId = await getUserIdFromContext(ctx);
                return ctx.prisma.userTask.findUnique({ where: { id: args.id } });
            },
        });
    },
});

export const UserTaskMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createUserTask', {
            type: UserTask,
            args: {
                data: nonNull(arg({ type: UserTaskInput })),
            },
            resolve(_root, { data }, ctx) {
                const { user, taskRole, createdById, task } = data;
                const notNullCreatedById = createdById || getUserIdFromContext(ctx);
                return ctx.prisma.userTask.create({
                    data: {
                        createdById: notNullCreatedById,
                        ...(taskRole
                            ? { taskRole: { connectOrCreate: { where: { id: taskRole.id }, create: taskRole } } }
                            : {}),
                        ...(user
                            ? { user: { connect: { id: user.id } } }
                            : {} as any),
                        ...(task
                            ? { task: { connectOrCreate: { where: { id: task.id }, create: task } } }
                            : {}),
                    },
                    include: {
                        user: true,
                        task: true,
                        taskRole: true,
                    },
                });
            },
        });

        t.field('updateUserTask', {
            type: UserTask,
            args: {
                id: nonNull(stringArg()),
                data: nonNull(arg({ type: UserTaskInput })),
            },
            resolve(_root, { id, data }, ctx) {
                const { user, taskRole, createdById, task } = data;
                return ctx.prisma.userTask.update({
                    where: { id },
                    data: {
                        ...(taskRole
                            ? { taskRole: { connectOrCreate: { where: { id: taskRole.id }, create: taskRole } } }
                            : {}),
                        ...(user
                            ? { user: { connect: { id: user.id } } }
                            : {} as any),
                        ...(task
                            ? { task: { connectOrCreate: { where: { id: task.id }, create: task } } }
                            : {}),
                    },
                    include: {
                        user: true,
                        task: true,
                        taskRole: true,
                    },
                });
            },
        });

        t.field('deleteUserTask', {
            type: UserTask,
            args: {
                id: nonNull(stringArg()),
            },
            resolve(_root, { id }, ctx) {
                return ctx.prisma.userTask.delete({
                    where: { id },
                    include: {
                        user: true,
                        task: true,
                        taskRole: true,
                    },
                });
            },
        });
    },
});

