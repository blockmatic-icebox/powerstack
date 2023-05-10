FROM hasura/graphql-engine:latest.cli-migrations-v3

ENV HASURA_GRAPHQL_MIGRATIONS_DIR=/migrations
ENV HASURA_GRAPHQL_METADATA_DIR=/metadata
COPY ./metadata /metadata
COPY ./migrations /migrations

# Use enviroment variables to configure hasura server
# https://hasura.io/docs/latest/graphql/core/deployment/graphql-engine-flags/reference/



