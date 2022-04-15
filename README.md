# PowerStack Remix Starter

PowerStack Remix template for development speed and great developer experience.

### Tech Stack

- remix react framework https://remix.run
- stitches styling framework https://stitches.dev
- remix-forms https://remix-forms.seasoned.cc/get-started
- prisma orm https://www.prisma.io/
- lodash utilities https://lodash.com/docs
- react-use hooks https://github.com/streamich/react-use
- typescript https://www.typescriptlang.org
- react-i18next internationalization https://github.com/sergiodxa/remix-i18next
- docker https://www.docker.com

### File Structure

```
- app/
  - styles/
    - client.context.tsx
    - server.context.tsx
    - stitches.config.ts
  - entry.client.tsx
  - entry.server.tsx
  - root.tsx
```

1. `client.context.tsx` - Keeps the client context of styles and to reset styles sheets after every interaction into the state.
2. `server.context.tsx` - Keeps the server context mounted on `entry.server.tsx`
   with the Stitches sheets.
3. `stitches.config.ts` - Keeps the Stitches configuration that is shared into
   the project.
4. `entry.client.tsx` - Every time that styles update and be re-injected it sets the
   Stitches sheet to a React state.
5. `entry.server.tsx` - Create the markup with the styles injected to serve on the server response.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/routes/index.tsx`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code

## Docker

```
# Build the image
docker build -t image_name .

# Start a container
docker run -p 3000:3000 -d image_name

# Get container ID
docker ps

# Print app output
docker logs <container id>
```

## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io) for details.

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
