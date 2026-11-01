# Contributing

## Prerequisites

- [Node.js](https://nodejs.org/) (see `.tool-versions` for the pinned version)
- [pnpm](https://pnpm.io/) (see `packageManager` in `package.json`; `corepack enable` will pick it up)
- [Docker](https://www.docker.com/) (for running integration tests locally)

## Getting Started

```sh
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests (consul, vault tests require Docker services)
pnpm run test
```

## Docker Services

Some packages (consul, vault) have integration tests that require running services. Start them with:

```sh
docker compose up -d --build --wait
```

This starts Vault and a Consul cluster with health checks, so the command blocks until all services are ready.

## Available Scripts

| Script                   | Description                      |
| ------------------------ | -------------------------------- |
| `pnpm run build`         | Build all packages               |
| `pnpm run clean`         | Remove build artifacts           |
| `pnpm run test`          | Run tests across all packages    |
| `pnpm run test:coverage` | Run tests with coverage          |
| `pnpm run lint`          | Lint with oxlint                 |
| `pnpm run format`        | Format with oxfmt                |
| `pnpm run checkstyle`    | Check formatting without writing |
| `pnpm run docs:dev`      | Start docs dev server            |

## Code Quality

- **Linting**: [oxlint](https://oxc.rs/)
- **Formatting**: [oxfmt](https://oxc.rs/)
- **Git hooks**: [Lefthook](https://github.com/evilmartians/lefthook) runs lint, format, and [commitlint](https://commitlint.js.org/) on commit
- **Commit messages**: Follow [Conventional Commits](https://www.conventionalcommits.org/)

## Releasing

This project uses [Changesets](https://github.com/changesets/changesets) for versioning. All public packages are versioned in lockstep.

To add a changeset for your PR:

```sh
pnpm run changeset
```
