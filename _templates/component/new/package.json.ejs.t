---
to: packages/<%= name %>/package.json
---
{
  "name": "@nikita-beewise-test/<%= h.changeCase.paramCase(name) %>",
  "version": "0.0.1",
  "types": "dist/cjs/index.d.ts",
  "module": "dist/esm/index.js",
  "main": "dist/cjs/index.js",
  "author": "Beewise",
  "maintainers": [
    "Nikita S"
  ],
  "repository": "git@github.com:nikita-beewise/multi-package-repo-demo.git",
  "license": "MIT",
  "scripts": {
    "build": "npm run clean && npm run compile:esm && npm run compile:cjs",
    "clean": "rm -rf ./dist",
    "compile:esm": "tsc -p build/tsconfig.esm.json",
    "compile:cjs": "tsc -p build/tsconfig.cjs.json",
    "prepublishOnly": "bolt build"
  },
  "files": [
    "dist"
  ],
  "dependencies": {
  },
  "devDependencies": {
    "@types/jest": "^26.0.13",
    "@types/react": "^16.9.49",
    "@types/styled-components": "^5.1.3",
    "jest": "^26.4.2",
    "typescript": "^4.0.2"
  },
  "peerDependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "styled-components": "^5.2.0"
  }
}
