# ng-starter-no-semi-four-space

I am tired of adding prettier and configuring for 4 spaced tab, no semicolon for my projects. So this starter project was born.

This boilerplate uses:

- TailwindCSS (with JIT compilation)
- Eslint
- Prettier
- Git hooks

## Get Started

1. Clone the repository and checkout to intended branch for your project's requirements:

`git clone https://github.com/touhidrahman/ng-starter-no-semi-four-space <your-project-name>`

`cd <your-project-name>`

`git checkout <desired-branch-name>`

- `main`: bare-bone angular project with tailwind support.
- `material`: official material library for angular as the UI framework.
- `zorro`: Uses the power of both tailwindcss and zorro.
- `prime`: PrimeNG X library for the UI. Uses v10.x which has a rich collection of angular components (MIT licenced)

2. Once checked out, remove the `.git` directory to remove all the connection to this starter repository.

`rm -rf .git`

3. Search project-wide (Ctrl+Shift+F for VS Code) for the string `ng-starter-no-semi-four-space` and replace with your project identifier (e.g.- `my-project`).

4. Re-initialize git with `git init` at the project root to add source control (optional).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contributing

Feel free to open an issue and/or PR to add features.

## Licence
&copy; MIT
