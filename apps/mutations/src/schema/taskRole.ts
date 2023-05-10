import { objectType, inputObjectType, extendType, arg, nonNull } from 'nexus';
import { getUserIdFromContext } from '../utils/userHelpers';

export const TaskRole = objectType({
  name: 'TaskRole',
  definition(t) {
    t.string('id');
    t.string('role');
  },
});

export const TaskRoleInput = inputObjectType({
  name: 'TaskRoleInput',
  definition(t) {
    t.string('id');
    t.string('role');
  },
});

export const TaskRoleMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createTaskRole', {
      type: TaskRole,
      args: {
        data: nonNull(
          arg({
            type: TaskRoleInput,
          }),
        ),
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.taskRole.create({
          data: {
            id: args.data.id as any,
            role: args.data.role as any,
          },
        });
      },
    });

    t.field('deleteTaskRole', {
      type: TaskRole,
      args: {
        id: nonNull(
          arg({
            type: 'String',
          }),
        ),
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.taskRole.delete({
          where: {
            id: args.id as any,
          },
        });
      },
    });
  },
});

export const TaskRoleQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('taskRoles', {
      type: TaskRole,
      async resolve(_root, _args, ctx) {
        const currentUserId = await getUserIdFromContext(ctx);
        return ctx.prisma.taskRole.findMany();
      },
    });
  },
});
