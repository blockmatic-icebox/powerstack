import { objectType, extendType, inputObjectType, arg, nonNull, stringArg } from 'nexus';
import { getUserIdFromContext } from '../utils/userHelpers';
import { Task, TaskInput } from './task';
import { User, UserInput } from './user';
import { removeUndefinedValues } from '../utils';

export const Comment = objectType({
    name: 'Comment',
    definition(t) {
        t.string('id', { description: 'Unique identifier for the comment' });
        t.field('createdAt', { type: 'DateTime' });
        t.field('updatedAt', { type: 'DateTime' });
        t.string('text', { description: 'Text content of the comment' });
        t.nullable.field('author', {
            type: User,
            description: 'User who authored the comment',
            resolve: (root, _args, ctx) => {
                return ctx.prisma.comment
                    .findFirst({
                        where: { id: root.id as any },
                    })
                    .author();
            },
        });
        t.nullable.field('task', {
            type: Task,
            description: 'Task associated with the comment, if any',
            resolve: (root, _args, ctx) => {
                return ctx.prisma.comment
                    .findFirst({
                        where: { id: root.id as any },
                    })
                    .task();
            },
        });
    },
});

export const CommentInput = inputObjectType({
    name: 'CommentInput',
    definition(t) {
        t.string('id');
        t.string('createdById');
        t.nullable.string('text');
        t.nullable.field('author', {
            type: UserInput,
            description: 'User who authored the comment',
        });
        t.nullable.field('task', {
            type: TaskInput,
            description: 'Task associated with the comment, if any',
        });
    },
});

export const CommentQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('comments', {
            type: Comment,
            resolve: async (_root, _args, ctx) => {
                const currentUserId = await getUserIdFromContext(ctx);

                return ctx.prisma.comment.findMany({
                    where: {
                        authorId: currentUserId as any,
                    },
                }) as any;
            },
        });
    },
});

export const CommentMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createComment', {
            type: Comment,
            args: {
                data: nonNull(
                    arg({
                        type: CommentInput,
                    }),
                ),
            },
            resolve: async (_root, args, ctx) => {
                const {
                    text,
                    author,
                    task,
                } = args.data;
                const createdById = args.data.createdById || getUserIdFromContext(ctx);

                return ctx.prisma.comment.create({
                    data: {
                        text: text as any,
                        createdById: createdById as any,
                        author: author ? { connectOrCreate: { where: { id: author.id }, create: author } } : {} as any,
                        task: task ? { connectOrCreate: { where: { id: task.id }, create: task } } : {} as any,
                    },
                    include: {
                        task: true,
                    },
                }) as any;
            },
        });

        t.field('updateComment', {
            type: Comment,
            args: {
                id: nonNull(stringArg()),
                data: nonNull(
                    arg({
                        type: CommentInput,
                    }),
                ),
            },
            async resolve(_parent, { id, data }, ctx) {
                const {
                    text,
                    author,
                    task,
                } = data;

                return ctx.prisma.comment.update({
                    where: { id },
                    data: {
                        text: text as any,
                        author: author ? { connectOrCreate: { where: { id: author.id }, create: author } } : {} as any,
                        task: task ? { connectOrCreate: { where: { id: task.id }, create: task } } : {} as any,
                    },
                    include: {
                        task: true,
                    },
                }) as any;
            },
        });

        t.field('deleteComment', {
            type: Comment,
            args: {
                id: nonNull(stringArg()),
            },
            resolve(_parent, { id }, ctx) {
                return ctx.prisma.comment.delete({
                    where: { id },
                    include: {
                        task: true,
                    },
                }) as any;
            },
        });
    },
});


export const cleanCommentData = (commentData: any) => {
    const cleanedComment = removeUndefinedValues(commentData);
    return {
        ...cleanedComment,
    };
};
