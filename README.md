# multi-package-repo-demo

We use [bolt](https://www.npmjs.com/package/bolt) to manage workspaces in this repository.

## Installing

Packages can be easily installed using npm. For example:
```
npm i @nikita-beewise-test/icon
```

## Creating a new component

[Hygen](https://www.hygen.io/) is used to create new components.
The current template is located in `/_templates/component/new`
folder.

To create a new component run the following command:
```
npx bolt generate:component <componentsName>
```

## Installing and building

To install dependencies and build all packages, run the following commands:
```
npx bolt
npx bolt build
```

## Developing and testing

[Storybook](https://storybook.js.org/) is used for package development and testing. To start the storybook run the
following command:
```
npm start
```

## Preparing for push

### Adding dependency to a package

Don't forget to add dependencies to packages. For example: if you
need `@nikita-beewise-test/icon` package in `@nikita-beewise-test/button` just
run the following command:
```
npx bolt w @nikita-beewise-test/button add @nikita-beewise-test/icon [-P|-D]
```

Where:
- `-P` for peer dependency;
- `-D` for dev dependency

### Version management

The [changesets](https://github.com/atlassian/changesets) is used for versions managing. After modifying the package,
you must run the following command:
```
npx changeset
```

This will give you the following prompt:
```
Which packages would you like to include? …
- changed packages
  ✔ @nikita-beewise-test/icon
- unchanged packages
    @nikita-beewise-test/button
    ...
```

Using up, down and space keys select the packages you want to include in the changeset.
```
Which packages should have a major bump? …
✔ @nikita-beewise-test/icon@0.0.2
```
Using up, down and space keys select the packages that will receive a major change (same for minor and patch).

Finish up by writing a (more-or-less) meaningful message.

You can bump versions of all packages and update dependencies by running:
```
npx changeset version
```

## Publishing

Before publishing, you must build all packages by running the following command
```
npx bolt
npx bolt build
```

After that, publish it to the npm registry using the following command:
```
npx bolt w @nikita-beewise-test/icon exec -- npm publish --access public
```
