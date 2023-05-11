import {
    makeSchema,
    asNexusMethod,
    declarativeWrappingPlugin,
    inputObjectType,
} from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'
import * as comment from './comment'
import * as task from './task'
import * as user from './user'
import * as path from 'path'

export const DateTime = asNexusMethod(DateTimeResolver, 'date')
export const IDConnect = inputObjectType({
    name: 'IDConnect',
    definition(t) {
        t.id('id');
    },
});
export const schema = makeSchema({
    types: [
        DateTime,
        IDConnect,
        comment.Comment,
        comment.CommentInput,
        comment.CommentMutation,
        comment.CommentQuery,
        task.Task,
        task.TaskInput,
        task.TaskMutation,
        task.TaskQuery,
        task.TaskWhereInput,
        user.User,
        user.UserInput,
        user.UserMutation,
        user.UserQuery,
        userTask.UserTask,
        userTask.UserTaskInput,
        userTask.UserTaskMutation,
        userTask.UserTaskQuery,
        taskRole.TaskRole,
        taskRole.TaskRoleInput,
        taskRole.TaskRoleMutation,
        taskRole.TaskRoleQuery,

    ],
    plugins: [declarativeWrappingPlugin()],
    contextType: {
        module: require.resolve('../context'),
        export: 'Context',
    },
    sourceTypes: {
        modules: [{ module: '@prisma/client', alias: 'PrismaClient' }],
    },

    outputs: {
        typegen: path.join(process.cwd(), 'node_modules/@types/nexus-typegen/index.d.ts'),
        schema: __dirname + '/generated/schema.graphql',
    },
    shouldExitAfterGenerateArtifacts: process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION === 'true',
})

