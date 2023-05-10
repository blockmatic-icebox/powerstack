import { objectType, extendType, inputObjectType, interfaceType, arg, nonNull } from 'nexus';
import logger from '../utils/logger';
import { Comment, CommentInput } from './comment';
import { getUserIdFromContext } from '../utils/userHelpers';
import { UserTask, UserTaskInput } from './userTask';


export const Task = objectType({
    name: 'Task',
    definition(t) {
        t.string('id');
        t.field('createdAt', { type: 'DateTime' });
        t.field('updatedAt', { type: 'DateTime' });
        t.string('createdById');
        t.string('title');
        t.nullable.string('notes');
        t.nullable.field('dueDate', { type: 'DateTime' });
        t.nullable.string('priority');
        t.string('status');
        t.list.field('subtasks', {
            type: Task,
            resolve: (parent, _, ctx) => {
                return ctx.prisma.task.findMany({
                    where: { parentTaskId: parent.id },
                });
            },
        });
        t.nullable.field('parentTask', {
            type: Task,
            resolve: (parent, _, ctx) => {
                return parent.parentTaskId
                    ? ctx.prisma.task.findUnique({
                        where: { id: parent.parentTaskId },
                    })
                    : null;
            },
        });
        t.nullable.string('parentTaskId');
        t.list.field('comments', {
            type: Comment,
            resolve: (parent, _, ctx) => {
                return ctx.prisma.comment.findMany({
                    where: { taskId: parent.id },
                });
            },
        });
        t.list.field('userTasks', {
            type: UserTask,
            resolve: (parent, _, ctx) => {
                return ctx.prisma.userTask.findMany({
                    where: { taskId: parent.id as any },
                });
            },
        });
    },
});

export const TaskInput = inputObjectType({
    name: 'TaskInput',
    definition(t) {
        t.string('id'); // Make this nullable if you want to allow it to be optional during updates
        t.nullable.string('createdById'); // Change this line to make createdById nullable
        t.string('title');
        t.nullable.string('notes');
        t.nullable.field('dueDate', { type: 'DateTime' });
        t.nullable.string('priority');
        t.string('status');
        t.list.field('subtasks', {
            type: TaskInput,
        });
        t.nullable.field('parentTask', {
            type: TaskInput,
        });
        t.list.field('comments', {
            type: CommentInput,
        });
        t.list.field('userTasks', {
            type: UserTaskInput,
        });
    },
});


export const TaskWhereInput = inputObjectType({
    name: "TaskWhereInput",
    definition(t) {
        t.string('id');
        t.nullable.string("createdById");
        t.nullable.id('parentTaskId');
    },
});

export const TaskQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('tasks', {
            type: Task,
            async resolve(_root, _args, ctx) {
                const currentUserId = await getUserIdFromContext(ctx);
                return ctx.prisma.task.findMany({
                    where: {
                    },
                });
            },
        });
        t.field('taskById', {
            type: Task,
            args: {
                id: 'String',
            },
            async resolve(_root, args, ctx) {
                const currentUserId = await getUserIdFromContext(ctx);
                return ctx.prisma.task.findUnique({
                    where: {
                        id: args.id as any,
                    },
                });
            },
        });
    },
});
export const TaskMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createTask', {
            type: Task,
            args: {
                data: nonNull(
                    arg({
                        type: TaskInput,
                    }),
                ),
            },
            resolve: async (_root, args, ctx) => {
                try {
                    const { data } = args;
                    const { parentTask, comments, subtasks, userTasks } = data;
                    const dueDate = new Date(data.dueDate);
                    const createdById = data.createdById || getUserIdFromContext(ctx);
                    return await ctx.prisma.task.create({
                        data: {
                            title: data.title as any,
                            notes: data.notes,
                            dueDate: dueDate,
                            priority: data.priority,
                            status: data.status as any,
                            ...(parentTask
                                ? { parentTask: { connectOrCreate: { where: { id: parentTask.id }, create: parentTask } } }
                                : {} as any),
                            ...(comments
                                ? {
                                    comments: {
                                        connectOrCreate: comments.map((item: any) => ({
                                            where: { id: item?.id },
                                            create: item,
                                        })),
                                    },
                                }
                                : {}),
                            ...(subtasks
                                ? {
                                    subtasks: {
                                        connectOrCreate: subtasks.map((item: any) => ({
                                            where: { id: item?.id },
                                            create: item,
                                        })),
                                    },
                                }
                                : {}),
                            ...(userTasks
                                ? {
                                    userTasks: {
                                        connectOrCreate: userTasks.map((item: any) => ({
                                            where: { id: item?.id },
                                            create: item,
                                        })),
                                    },
                                }
                                : {}),
                            createdById: createdById,
                        } as any,
                        include: {
                            subtasks: true,
                            parentTask: true,
                            comments: true,
                        },
                    });
                } catch (error: any) {
                    logger.error(`Error creating task: ${error.message}`, error);
                    throw error;
                }
            }

        });

        t.field('updateTask', {
            type: Task,
            args: {
                id: nonNull(arg({ type: 'String' })),
                data: nonNull(arg({ type: TaskInput })),
            },
            resolve: async (_root, args, ctx) => {
                try {
                    const { id, data } = args;
                    const { parentTask, comments, subtasks, userTasks } = data;
                    return await ctx.prisma.task.update({
                        where: { id },
                        data: {
                            title: data.title,
                            notes: data.notes,
                            dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
                            priority: data.priority,
                            status: data.status,
                            ...(parentTask
                                ? { parentTask: { connectOrCreate: { where: { id: parentTask.id }, create: parentTask } } }
                                : {} as any),
                            ...(comments
                                ? {
                                    comments: {
                                        connectOrCreate: comments.map((item: any) => ({
                                            where: { id: item?.id },
                                            create: item,
                                        })),
                                    },
                                }
                                : {}),
                            ...(subtasks
                                ? {
                                    subtasks: {
                                        connectOrCreate: subtasks.map((item: any) => ({
                                            where: { id: item?.id },
                                            create: item,
                                        })),
                                    },
                                }
                                : {}),
                            ...(userTasks
                                ? {
                                    userTasks: {
                                        connectOrCreate: userTasks.map((item: any) => ({
                                            where: { id: item?.id },
                                            create: item,
                                        })),
                                    },
                                }
                                : {}),
                        },
                        include: {
                            subtasks: true,
                            parentTask: true,
                            comments: true,
                        },
                    });
                } catch (error: any) {
                    logger.error(`Error updating task: ${error.message}`, error);
                    throw error;
                }
            },
        });

        t.field('deleteTask', {
            type: Task,
            args: {
                id: nonNull(arg({ type: 'String' })),
            },
            resolve: async (_root, args, ctx) => {
                try {
                    const { id } = args;

                    return await ctx.prisma.task.delete({
                        where: { id },
                        include: {
                            subtasks: true,
                            parentTask: true,
                            comments: true,
                        },
                    });
                } catch (error: any) {
                    logger.error(`Error deleting task: ${error.message}`, error);
                    throw error;
                }
            },
        });
    },
});
