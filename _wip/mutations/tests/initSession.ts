// test-utils.ts
import { FastifyInstance } from 'fastify';
import { FastifyRequest } from 'fastify';

interface InjectedRequest extends FastifyRequest {
  cookies: { [key: string]: string };
}

export const initSession = async (server: FastifyInstance) => {
  const cookies: { [key: string]: string } = {};

  // Send a request to initialize the session
  const response = await server.inject({
    method: 'POST',
    url: '/', // replace with your actual endpoint to initialize session
    payload: {
      userId: '1', // replace with your actual user id
    },
  });

  const setCookieHeaders: string[] = response.headers['set-cookie'] as string[];

  if (setCookieHeaders) {
    for (const header of setCookieHeaders) {
      const [cookieName, value] = header.split(';')[0].split('=');
      cookies[cookieName] = value;
    }
  }

  return cookies;
};
