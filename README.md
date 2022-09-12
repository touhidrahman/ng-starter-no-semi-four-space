# ng-starter-no-semi-four-space

This boilerplate uses:

- TailwindCSS
- Eslint
- Prettier
- Git hooks
- Boxicons
- Angular Material

and most importantly - **4 space tabs** and **NO SEMICOLON**

## Get Started

1. Clone the repository and checkout to intended branch for your project's requirements:

`git clone https://github.com/touhidrahman/ng-starter-no-semi-four-space <your-project-name>`

`cd <your-project-name>`

`git checkout <desired-branch-name>`

- `main`: bare-bone angular project with tailwind support.
- `material`: official material library for angular as the UI framework.
- `zorro`: Uses the power of both tailwindcss and zorro.
- `prime`: PrimeNG X library for the UI. Uses v10.x which has a rich collection of angular components (MIT licenced)

**N.B:** Branches are not updated as often as the `main` branch.

2. Once checked out, remove the `.git` directory to remove all the connection to this starter repository.

`rm -rf .git`

3. Search project-wide (Ctrl+Shift+F for VS Code) for the string `ng-starter-no-semi-four-space` and replace with your project identifier (e.g.- `my-project`).

4. Re-initialize git with `git init` at the project root to add source control (optional).

5. Feel free to remove libraries that you don't need.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Contributing

Feel free to open an issue and/or PR to add features.

## Licence
&copy; MIT
