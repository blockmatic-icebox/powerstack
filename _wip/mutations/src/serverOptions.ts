import {
  FastifyInstance,
  FastifyListenOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { schema } from "./schema";
import { Context } from "./context";
import { getUser } from "./utils/userHelpers";
import { User } from "./schema/types";

const HOST = process.env.HOST || "localhost";
const PORT = Number.parseInt(process.env.PORT as string) ?? 3000;

export function makeListenOptions(server: FastifyInstance) {
  // Create a new AbortController instance
  const abortController = new AbortController();

  // Add an event listener to the AbortController's "abort" event
  abortController.signal.addEventListener("abort", () => {
    server.log.info("Server shutting down due to user request");

    // Close the server and perform any necessary cleanup
    server
      .close()
      .then(() => {
        server.log.info("Server closed successfully");
        process.exit(0);
      })
      .catch((err) => {
        server.log.error(`Error closing server: ${err.message}`);
        process.exit(1);
      });
  });
  const listenOptions: FastifyListenOptions = {
    // Port number on which the server will listen
    port: PORT,

    // Hostname or IP address on which the server will listen (optional)
    host: HOST,

    // Maximum number of pending connections that the server can queue (optional)
    backlog: 511,

    // Whether or not to use an exclusive socket (optional)
    exclusive: true,
    signal: abortController.signal, // Use the AbortController's signal property as the signal option
  };
  return listenOptions;
}

export function createAltairConfigurations(): any {
  return {
    path: "/altair", // Set the path for Altair
    endpointURL: "/graphql", // Set the GraphQL endpoint URL
    schema: schema, // Pass your GraphQL schema to Altair
    options: {
      // Pass any additional options for Altair
      theme: "dark",
      "plugin.list": [
        // Add the altair-graphql-plugin-graphql-explorer plugin
        {
          name: "altair-graphql-plugin-graphql-explorer",
          url: "https://unpkg.com/altair-graphql-plugin-graphql-explorer@0.1.0/dist/",
        },
      ],
    },
    preMiddleware: [], // Add pre-middleware plugins for Altair
    postMiddleware: [], // Add post-middleware plugins for Altair
  };
}

// Define constant values
const MAX_QUERY_DEPTH = 10;
const MAX_STRING_LENGTH = 100;
const JIT_COMPILATION_LEVEL = 1;
const PERSISTED_QUERY_TTL_SECONDS = 600;

// Define your Mercurius options
export const createMercuriusOptions: any = (server: FastifyInstance) => {
  return {
    schema, // Pass in your GraphQL schema
    queryDepth: MAX_QUERY_DEPTH, // Set the maximum depth of a GraphQL query
    validationRules: [
      // Add custom validation rules to the GraphQL server
      validateStringLength,
    ],
    cache: true, // Enable caching of parsed GraphQL operations
    jit: JIT_COMPILATION_LEVEL, // Enable just-in-time compilation of GraphQL operations
    context: async (
      request: FastifyRequest,
      reply: FastifyReply
    ): Promise<Context> => {
      // Set the context for the GraphQL resolver functions
      const user: User = (await getUser(request)) as any;
      return {
        prisma: server.prisma, // Access to Prisma for database access
        request, // The HTTP request object
        reply, // The HTTP response object
        user, // The authenticated user
      };
    },
    persistedQueries: {
      // Enable persisted queries
      cache: new Map(), // Set up a cache object for storing persisted queries
      ttl: PERSISTED_QUERY_TTL_SECONDS, // Set the time-to-live for persisted queries in seconds
    },
    allowBatchedQueries: true, // Allow multiple queries to be sent in a single HTTP requests
    extensions: [
      // Add extensions to the GraphQL server
    ],
    logger: true, // Enable Mercurius logger for debugging
  };
};
function validateStringLength(context: {
  reportError: (arg0: Error, arg1: any[]) => void;
}) {
  return {
    Field(node: { value: string | any[] }) {
      if (
        typeof node.value === "string" &&
        node.value.length > MAX_STRING_LENGTH
      ) {
        context.reportError(
          new Error(
            `String exceeds maximum length of ${MAX_STRING_LENGTH} characters.`
          ),
          [node]
        );
      }
    },
  };
}

export function createFastifyServerOptions() {
  return {
    logger: {
      level: "info",
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
      serializers: {
        res(reply: FastifyReply) {
          // The default
          return {
            statusCode: reply.statusCode,
          };
        },
        req(request: FastifyRequest) {
          return {
            method: request.method,
            url: request.url,
            path: request.routerPath,
            parameters: request.params,
            // Including the headers in the log could be in violation
            // of privacy laws, e.g. GDPR. You should use the "redact" option to
            // remove sensitive fields. It could also leak authentication data in
            // the logs.
            headers: request.headers,
          };
        },
      },
    },
    disableRequestLogging: process.env.ENABLE_REQUEST_LOGGING !== "true",
  };
}
export const generateSwaggerOptions = (server: FastifyInstance) => {
  return {
    swagger: {
      info: {
        title: "server",
        version: "1.0.0",
      },
      externalDocs: {
        url: "https://swagger.io",
        description: "Find more info here",
      },
      host: `${HOST}:${PORT}`,
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  };
};
