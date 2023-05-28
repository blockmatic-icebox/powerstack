require('dotenv').config({ path: '.env.test' });
import { createServer } from '../src/server';
import {
    FastifyInstance,
} from 'fastify';
import { Server } from 'http';
import {
    createFastifyServerOptions,
    makeListenOptions,
} from '../src/serverOptions';

import seed, { prisma } from './seed';
import { runDatabaseCreation } from './setupEnv';
import { closeDatabase, closeServer } from './teardown';
import { initSession } from './initSession';


export let server: FastifyInstance<Server>;

export default async (): Promise<void> => {
    // Create a server for testing with the provided configurations
    await runDatabaseCreation();
    server = createServer(createFastifyServerOptions());

    // Start the server
    const listenOptions = makeListenOptions(server);
    await server.listen(listenOptions);

    // Seed the database
    await seed();
    initSession(server);
    // Save the server instance for teardown
    (global as any)['__TEST_SERVER__'] = server;
};


