// seed.ts
import { PrismaClient } from '@prisma/client';
import { CommentInput } from '../src/schema/types';
import { cleanCommentData } from '../src/schema/comment';
export const prisma = new PrismaClient();
function rand(max: number = 4): number {
    return Math.floor(Math.random() * max);
}
async function seed() {
    // Seed your data here
    // Wait for 5 seconds for the db migration to complete
    await wait(5000);
    for (const user of usersSeed) {
        await prisma.user.create({ data: user });
    }
    for (const taskRole of taskRolesSeed) {
        await prisma.taskRole.create({ data: taskRole });
    }
    for (const task of tasksSeed) {
        await prisma.task.create({ data: task });
    }
    for (const comment of commentSeed) {
        await prisma.comment.create({ data: comment });
    }
    for (const userTask of userTaskSeed) {
        await prisma.userTask.create({ data: userTask });
    }
    // Close the Prisma connection after seeding
    await prisma.$disconnect();
}
function wait(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
export default seed;

// data setup
export const taskRolesSeed = [
    {
        id: '1',
        role: 'assignee',
    },
    {
        id: '2',
        role: 'creator',
    },
    {
        id: '3',
        role: 'reviewer',
    },
    {
        id: '4',
        role: 'contributor',
    },
    {
        id: '5',
        role: 'observer',
    },
];
export const usersSeed = [
    {
        id: '1',
        email: 'user1@example.com',
        password: 'user123',
        firstName: 'User',
        lastName: 'One',
        name: 'User One',
    },
    {
        id: '2',
        email: 'user2@example.com',
        password: 'user234',
        firstName: 'User',
        lastName: 'Two',
        name: 'User Two',
    },
    {
        id: '3',
        email: 'user3@example.com',
        password: 'user345',
        firstName: 'User',
        lastName: 'Three',
        name: 'User Three',
    },
    {
        id: '4',
        email: 'user4@example.com',
        password: 'user456',
        firstName: 'User',
        lastName: 'Four',
        name: 'User Four',
    },
    {
        id: '5',
        email: 'user5@example.com',
        password: 'user567',
        firstName: 'User',
        lastName: 'Five',
        name: 'User Five',
    },
];
export const tasksSeed = [
    {
        id: '1',
        title: 'Task 1',
        notes: 'Notes for task 1',
        dueDate: new Date(),
        priority: 'High',
        status: 'In progress',
        createdById: '1',
    },
    {
        id: '2',
        title: 'Task 2',
        notes: 'Notes for task 2',
        dueDate: new Date(),
        priority: 'Medium',
        status: 'Not started',
        createdById: '2',
    },
    {
        id: '3',
        title: 'Task 3',
        notes: 'Notes for task 3',
        dueDate: new Date(),
        priority: 'Low',
        status: 'Completed',
        createdById: '3',
    },
    {
        id: '4',
        title: 'Task 4',
        notes: 'Notes for task 4',
        dueDate: new Date(),
        priority: 'High',
        status: 'In progress',
        createdById: '4',
    },
    {
        id: '5',
        title: 'Task 5',
        notes: 'Notes for task 5',
        dueDate: new Date(),
        priority: 'Medium',
        status: 'Not started',
        createdById: '5',
    },
]; 

export const commentSeed = [
    {
        id: '1',
        text: 'Great progress on this task!',
        createdById: '1',
    },
    {
        id: '2',
        text: 'Keep up the good work!',
        createdById: '2',
    },
    {
        id: '3',
        text: 'You are doing an amazing job!',
        createdById: '3',
    },
    {
        id: '4',
        text: 'Keep pushing yourself!',
        createdById: '4',
    },
    {
        id: '5',
        text: 'You are almost there!',
        createdById: '5',
    },
];
export const userTaskSeed = [
    {
        id: '1',
        createdById: '1',
    },
    {
        id: '2',
        createdById: '2',
    },
    {
        id: '3',
        createdById: '3',
    },
    {
        id: '4',
        createdById: '4',
    },
    {
        id: '5',
        createdById: '5',
    },
];


export const userTasks = userTaskSeed.map((userTask, index) => ({
    ...userTask,
    user: usersSeed[index],
    task: tasksSeed[index],
    taskRole: taskRolesSeed[index],
}));

export const comments = commentSeed.map((comment, index) => ({
    ...comment,
    author: usersSeed[index],
    task: tasksSeed[index],
}));