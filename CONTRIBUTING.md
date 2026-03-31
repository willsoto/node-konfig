# Contributing

## Prerequisites

- [Bun](https://bun.sh/) (see `.tool-versions` for the pinned version)
- [Docker](https://www.docker.com/) (for running integration tests locally)

## Getting Started

```sh
# Install dependencies
bun install

# Build all packages
bun run build

# Run tests (consul, vault tests require Docker services)
bun run test
```

## Docker Services

Some packages (consul, vault) have integration tests that require running services. Start them with:

```sh
docker compose up -d --build --wait
```

This starts Vault and a Consul cluster with health checks, so the command blocks until all services are ready.

## Available Scripts

| Script                  | Description                      |
| ----------------------- | -------------------------------- |
| `bun run build`         | Build all packages               |
| `bun run clean`         | Remove build artifacts           |
| `bun run test`          | Run tests across all packages    |
| `bun run test:coverage` | Run tests with coverage          |
| `bun run lint`          | Lint with oxlint                 |
| `bun run format`        | Format with oxfmt                |
| `bun run checkstyle`    | Check formatting without writing |
| `bun run docs:dev`      | Start docs dev server            |

## Code Quality

- **Linting**: [oxlint](https://oxc.rs/)
- **Formatting**: [oxfmt](https://oxc.rs/)
- **Git hooks**: [Lefthook](https://github.com/evilmartians/lefthook) runs lint, format, and [commitlint](https://commitlint.js.org/) on commit
- **Commit messages**: Follow [Conventional Commits](https://www.conventionalcommits.org/)

## Releasing

This project uses [Changesets](https://github.com/changesets/changesets) for versioning. All public packages are versioned in lockstep.

To add a changeset for your PR:

```sh
bun run changeset
```
