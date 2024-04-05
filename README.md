# Starter for Next.JS, Tailwind, and Typescript

Next.js starter using App router, Tailwind css, and Typescript

## Features

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [Typescript](https://www.typescriptlang.org)
- 💎 Integrated with [Tailwind CSS](https://tailwindcss.com) and Shadcn UI
- ✅ React Strict Mode
- 🌐 Internationalization (i18n) with [next-intl](https://next-intl-docs.vercel.app)
- ♻️ Type-safe Environment Variables using T3 Env
- 📏 Linter with [Eslint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, and Unicorn)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running checks on Git staged files
- 📓 Conventional commits with cz-git
- 👨‍🍳 Storybook for UI development
- 🎁 Automatic changelog generation with Semantic Release
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Extensions and Settings
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

Built-in features from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js v20+ and pnpm

### Getting started

Run the following commands on your local environment:

```sh
git clone https://github.com/jbabin91/saas-starter.git my-project-name
cd my-project-name
pnpm install
```

Then, you can run the application locally with the following command:

```sh
pnpm dev
```

Open <http://localhost:3000> with your favorite browser to see your project.

### Translation (i18n) setup

For translation, the project uses `next-intl` combined with [Crowdin](https://l.crowdin.com/next-js). As a developer, you only need to take care of the English (or another default language) version. Other languages are automatically generated and handled by Crowdin. You can use Crowdin to collaborate with your translation team or translate the messages yourself with the help of machine translation.

To set up translation (i18n), create an account at [Crowdin.com](https://l.crowdin.com/next-js) and create a new project. In the newly created project, you will able to find the project ID. You'll also require to create a new Personal Access Tokens by going to Account Settings > API. Then, in your GitHub Actions, you need to define the following environment variables `CROWDIN_PROJECT_ID` and `CROWDIN_PERSONAL_TOKEN`.

After defining the environment variables in your GitHub Actions, your localization files will be synchronized with Crowdin everytime you push a new commit to the `main` branch.

### Project structure

```sh
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # Reusable components
│   ├── features                    # Components specific to a feature
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── styles                      # Styles folder
│   ├── types                       # Type definitions
│   └── utils                       # Utilities folder
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next.js SaaS Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from <https://favicon.io/favicon-converter/>
- `src/utils/siteConfig.ts`: configuration file
- `next.config.mjs`: Next.js configuration
- `next-sitemap.config.cjs`: sitemap configuration
- `.env`: default environment variables

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [cz-git](https://cz-git.qbb.sh/), an interactive CLI that guides you through the commit process. To use it, run the following command:

```sh
pnpm commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Deploy to production

You can generate a production build with:

```sh
pnpm build
```

It generates an optimized production build of the boilerplate. For testing the generated build, you can run:

```sh
pnpm start
```

The command starts a local server with the production build. Then, you can now open <http://localhost:3000> with your favorite browser to see the project.

### Useful commands

#### Bundle Analyzer

SaaS Boilerplate comes with a built-in bundle analyzer. It can be used to analyze the size of your JavaScript bundles. To begin, run the following command:

```shell
pnpm build-stats
```

By running the command, it'll automatically open a new browser window with the results.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Inspirations

- Heavily inspired by [SaaS-Boilerplate](https://github.com/ixartz/SaaS-Boilerplate)

### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.
