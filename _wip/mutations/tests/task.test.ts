import { expect } from '@jest/globals';
import { gql } from 'graphql-request';
import { client } from './base';
import { describe, test } from '@jest/globals';
import logger from '../src/utils/logger';
import { tasksSeed } from './seed';

describe('Task API tests', () => {
  const createTaskMutation = gql`
    mutation CreateTask($data: TaskInput!) {
      createTask(data: $data) {
        id
        title
        notes
        dueDate
        priority
        status
      }
    }
  `;

  const getAllTasksQuery = gql`
    query {
      tasks {
        id
        title
      }
    }
  `;

  const getTaskByIdQuery = gql`
    query TaskById($id: String) {
      taskById(id: $id) {
        id
        title
      }
    }
  `;

  test('Create a new task', async () => {
    const variables: any = {
      data: tasksSeed[0],
    };

    delete variables.data.id;
    try {
      const response: any = await client.request(createTaskMutation, variables);
      expect(response.createTask.title).toBe(variables.data.title);
    } catch (error) {
      logger.error({
        message: 'Error creating user',
        error,
        variables,
      });
      throw error;
    }
  });

  test('Get all tasks', async () => {
    try {
      const response: any = await client.request(getAllTasksQuery);
      expect(response.tasks.length).toBeGreaterThan(0);
    } catch (error) {
      logger.error({
        message: 'Error creating user',
        error,
      });
      throw error;
    }
  });

  test('Get task by ID', async () => {
    const taskId = '1';

    const variables = {
      id: taskId,
    };
    try {
      const response: any = await client.request(getTaskByIdQuery, variables);
      expect(response.taskById.id).toBe(taskId);
    } catch (error) {
      logger.error({
        message: 'Error creating user',
        error,
        variables,
      });
      throw error;
    }
  });
});
