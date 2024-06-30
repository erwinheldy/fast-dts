# fast-dts

Fast TypeScript Definition File Generator.

## Install

```sh
npm install fast-dts
```

## Usage / Example

```typescript
import { generate } from 'fast-dts'
await generate('src/index.ts', 'dist/index.d.ts')
```

## Command line

```bash
fast-dts src/index.ts dist/index.d.ts
```

## License

[MIT](./LICENSE)
