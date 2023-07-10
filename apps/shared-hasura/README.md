# PowerStack Hasura

GraphQL Engine for PowerStack projects.

⚡️ [PowerStack: a powerful fullstack development framework](https://powerstack.xyz).

_Disclaimer: This is a work in progress. Will be finalized soon._

## General

Hasura service is responsible for

- Database migrations.
- GraphQL API Gateway.
- Access control.

## Requirements

- Docker [docker.com](https://www.docker.com)
- Docker Compose [docs.docker.com/compose](https://docs.docker.com/compose)
- Task [taskfile.dev](https://taskfile.dev)

## Hasura Fundamentals

- [How Hasura GraphQL engine works](https://hasura.io/docs/latest/getting-started/how-it-works/index/) -[Filter query results / search queries](https://hasura.io/docs/latest/queries/postgres/query-filters/)
- [Postgres JSON and JSONB type support on GraphQL](https://hasura.io/blog/postgres-json-and-jsonb-type-support-on-graphql-41f586e47536/)
- [Authentication with JWT](https://hasura.io/docs/latest/auth/authentication/jwt/)
- [Access Control](https://hasura.io/docs/latest/auth/authorization/index/)

Ref [Hasura Environment Variables](https://hasura.io/docs/latest/graphql/core/hasura-cli/config-reference/#environment-variables)

## Directory Structure

```
.
├── metadata/ ........................................... hasura metadata
├── migrations/ ......................................... hasura migrations
├── config.yaml.......................................... hasura config
└── .env ................................................ environment variables ([ hasura variables] )
```

## Database Migrations

[Hasura Database Migrations](https://hasura.io/docs/latest/graphql/core/migrations/index) enable a rock-solid deployment.

## Deployment

...

## Contributing

We use a [Discussions Board](https://github.com/blockmatic/powerstack-docs/discussions/1) to gather thoughts, bug reports and feature requests from the community.

Follow the standard Github Flow for PRs. [Contributing Guidelines](https://docs.powerstack.xyz/powerstack/other-resources/contributing-guidelines).

## Blockmatic

Blockmatic is building a robust ecosystem of people and tools for the development of blockchain applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png 'twitter icon with padding'
[2.1]: http://i.imgur.com/P3YfQoD.png 'facebook icon with padding'
[3.1]: http://i.imgur.com/0o48UoR.png 'github icon with padding'

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png 'twitter icon without padding'
[2.2]: http://i.imgur.com/fep1WsG.png 'facebook icon without padding'
[3.2]: http://i.imgur.com/9I6NRUm.png 'github icon without padding'

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
