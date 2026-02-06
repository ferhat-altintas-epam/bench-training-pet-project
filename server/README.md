Install dependencies

```bash
npm i
```

Run server

```bash
npm run dev
```

Lint and format

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

Pre-commit hooks (optional)

```bash
npm run prepare
```

This installs Husky and enables the `.husky/pre-commit` hook, which runs `lint-staged` to lint and format staged files.
