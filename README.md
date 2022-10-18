# use-truncate

`use-truncate` is a lightweight (no dependencies) and straightforward truncate function. It's inspired by [cli-truncate](https://www.npmjs.com/package/cli-truncate). The main reason `use-truncate` exists is that I could not find any other way to truncate a string easily in react. The other reason is that I wanted a package that supports both ESM and CJS.

# Installation

- Npm : `npm i use-truncate`
- Yarn : `yarn add use-truncate`
- Pnpm : `pnpm add use-truncate`

# Usage

The most common use case is to truncate a string to a certain length :

```ts
const truncatedValue = useTruncate("This string is too long I guess", {
  maxLength: 10,
});
```

## Options

- `maxLength`: The maximum length of the string.
- `ellipsis`: The string to use as ellipsis.

## ESM or CJS

- ESM : `/dist/esm/index.js`
- CJS : `/dist/cjs/index.js`

## Contributions

Feel free to open an issue or create a pull request to add your needed features.

## Peer Depedenencies
* react: "^16.8.0  || ^17.0.0 || ^18.0.0"
* react-dom: "^16.8.0  || ^17.0.0 || ^18.0.0"

### Tests

Tests can be run using Jest. There is a `test` script inside the `package.json`, feel free to use your favorite package manager to run it (npm run test, yarn test, pnpm test).
