// types.ts
import { NexusGenFieldTypes, NexusGenInputs } from 'nexus-typegen';

export type Comment = NexusGenFieldTypes['Comment'];
export type Task = NexusGenFieldTypes['Task'];
export type User = NexusGenFieldTypes['User'];
export type UserTask = NexusGenFieldTypes['UserTask'];
export type TaskRole = NexusGenFieldTypes['TaskRole'];

export type CommentInput = NexusGenInputs['CommentInput'];
export type TaskInput = NexusGenInputs['TaskInput'];
export type UserInput = NexusGenInputs['UserInput'];
export type UserTaskInput = NexusGenInputs['UserTaskInput'];
export type TaskRoleInput = NexusGenInputs['TaskRoleInput'];
