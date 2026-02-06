# Workflows

## Board

1. Pick a ticket by assigning it to yourself
2. Once you start to work on it move the ticket to In progress column
3. After you created a PR with your changes move the ticket to In review column
4. Once your PR is approved and merged you can move your ticket to Done column

## Branching strategy

All branches should be created from the develop branch, and merge to that by opening a pull request.

## Branch naming

Follow this convention: [ticket-type]/[ticket-number]/[short-description]

**Ticket types**

feature - for new features

bugfix - for fixing issues

tech - for technical related works, like refactorings

**Example**

feature/12/implementing-authentication

## Development

Aim for writing clean code following best practices without issues. Also make sure that your code is covered by unit tests.

## Commit naming

Follow this convention: [ticket-number]: [short-description]

**Example**

12: Implementing authentication

## Review

All PRs should have at least one approval from the team before merging.

When reviewing code look for bugs/issues/tests/improvements and let the author know by leaving comments.

If everything is fine approve the PR.
