# Contributing

## Selecting a Node version

This project uses [Volta](https://volta.sh/) so if you have it installed the correct Node version will be selected for you. If you don't use Volta, you should use Node LTS.

## Building

This is a [Rush](https://rushjs.io/) managed monorepo. It also uses [Docker](https://docs.docker.com/compose/) to manage external services for testing.

In order to get the project working locally, you should:

1. `npm install -g @microsoft/rush` (or install `rush` using your tool of choice)
2. `docker-compose up -d`
3. `rush update`
4. `rush build` to confirm everything builds
5. `rush test` to confirm everything works

## Testing individual packages

When you are working within a package, for example `packages/core`, you can use `rushx` to execute scripts for that specific package. All available scripts are listed in that package's `package.json`
