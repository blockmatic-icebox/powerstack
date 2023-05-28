import { gql } from 'graphql-request';
import { client } from './base';
import { describe, test } from '@jest/globals';
import logger from '../src/utils/logger';
import { comments } from './seed';

describe('Comment', () => {
  let commentId = '';

  test('createComment', async () => {
    const createCommentMutation = gql`
      mutation createComment($data: CommentInput!) {
        createComment(data: $data) {
          id
          text
          author {
            id
          }
          task {
            id
          }
        }
      }
    `;

    const variables: any = {
      data: comments[0],
    };
    delete variables.data.id;

    try {
      const response: any = await client.request(createCommentMutation, variables);
      expect(response.createComment).toHaveProperty('id');
      expect(response.createComment.text).toBe(comments[0].text);
      expect(response.createComment.author.id).toBe(comments[0].author.id);
      expect(response.createComment.task.id).toBe(comments[0].task.id);
      commentId = response.createComment.id;
    } catch (error) {
      logger.error({
        message: 'Error creating comment',
        error,
        variables,
      });
      throw error;
    }
  });

  test('getComments', async () => {
    const getCommentsQuery = gql`
      query getComments {
        comments {
          id
          text
          author {
            id
          }
          task {
            id
          }
        }
      }
    `;

    try {
      const response: any = await client.request(getCommentsQuery);
      expect(response.comments).toBeInstanceOf(Array);
      expect(response.comments.length).toBeGreaterThan(0);
    } catch (error) {
      logger.error({
        message: 'Error getting comments',
        error,
      });
      throw error;
    }
  });

  test('updateComment', async () => {
    const updateCommentMutation = gql`
      mutation updateComment($id: String!, $data: CommentInput!) {
        updateComment(id: $id, data: $data) {
          id
          text
          author {
            id
          }
          task {
            id
          }
        }
      }
    `;

    const variables: any = {
      id: commentId,
      data: comments[1],
    };
    delete variables.data.id;

    try {
      const response: any = await client.request(updateCommentMutation, variables);
      expect(response.updateComment).toHaveProperty('id');
      expect(response.updateComment.text).toBe(comments[1].text);
      expect(response.updateComment.author.id).toBe(comments[1].author.id);
      expect(response.updateComment.task.id).toBe(comments[1].task.id);
    } catch (error) {
      logger.error({
        message: 'Error updating comment',
        error,
        variables,
      });
      throw error;
    }
  });

  test('deleteComment', async () => {
    const deleteCommentMutation = gql`
      mutation deleteComment($id: String!) {
        deleteComment(id: $id) {
          id
        }
      }
    `;

    const variables = {
      id: commentId,
    };

    try {
      const response: any = await client.request(deleteCommentMutation, variables);
      expect(response.deleteComment).toHaveProperty('id');
      expect(response.deleteComment.id).toBe(commentId);
    } catch (error) {
      logger.error({
        message: 'Error deleting comment',
        error,
        variables,
      });
      throw error;
    }
  });
});
