# News-website

This project is a Vue 3 application that fetches and displays news articles. The application features a modular component structure, 
responsive design, and uses modern tools like Vite, Pinia, SASS, TypeScript and 
FontAwesome icons.

## Table of Contents

- [Project Structure](#project-structure)
- [API](#api)
- [Environment Variables](#environment-variables)
- [State Management](#state-management)
- [Icons](#icons)
- [Fonts](#fonts)
- [Linting](#linting)
- [Responsiveness](#responsiveness)
- [Getting Started](#getting-started)

## Project Structure

The project is organized as follows:
This template should help get you started developing with Vue 3 in Vite.

```
src/
├── assets/
│   ├── images/
│   └── styles/
│       ├── atoms/
│       ├── molecules/
│       ├── organisms/
│       ├── pages/
│       ├── templates/
│       └── vars/
│           ├── _colors.sass
│           ├── _mediaQueries.sass
│           └── _typo.sass
│       └── main.sass
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── pages/
│   └── templates/
├── plugins/
├── router/
├── services/
├── stores/
├── utils/
├── App.vue
├── constants.ts
├── main.ts
├── shims-vue.d.ts
├── types.ts
└── .env
```

Atomic Design methodology was applied as a basis for organizing the structure 
of components and styles. This approach organizes components into a hierarchy 
from simplest to most complex:

- **Atoms:** Basic elements (e.g., buttons, icons)
- **Molecules:** Groups of atoms (e.g., search bars)
- **Organisms:** Complex components (e.g., navigation bars)
- **Templates:** Layouts displaying component structure
- **Pages:** Actual UI screens with real data.

This method ensures scalability and maintainability, facilitating the transition 
between simple and complex components smoothly.

### Assets
The assets folder is used to store static assets and contains next subfolders:
- **images:** Contains image files used in the project.
- **styles:** Contains SASS styles organized into different folders for atoms, molecules, organisms, pages, and templates.
- **vars:** Contains SASS variables and mixins for colors, media queries, and typography.
    - **_colors.sass:** Color variables.
    - **_mediaQueries.sass:** Media query mixins.
    - **_typo.sass:** Typography variables and mixins.
- **main.sass:** Main SASS file that imports all the necessary styles.

### Components
The components folder is a key part of the application's structure, 
housing reusable components that can be used throughout the application.
The components folder contains next subfolders:
- **atoms:** Basic components like BaseButton.vue and BaseInputField.vue.
- **molecules:** Combinations of atoms, e.g., SearchBar.vue.
- **organisms:** Complex components that form distinct sections of the UI, e.g., 
NavMenu.vue.
- **pages:** Full page components, e.g., HomePage.vue, CategoryPage.vue.
- **templates:** Layout templates used across the application.

### Plugins
Contains plugin configurations, such as `fontAwesome.ts`. 

### Router
Contains routing configurations.

### Services
Contains service files for API calls and other utilities.

### Stores
Contains Pinia store definitions for state management.

### Utils
Contains utility files and helpers.

### Other Files
- **App.vue:** Root component.
- **constants.ts:** Contains constant values used in the application.
- **main.ts:** Entry point of the application.
- **types.ts:** Custom TypeScript types.
- **.env:** Stores environment variables.
- **.eslintrc.cjs:** ESLint configuration file.
- **.gitignore:** Specifies files and directories to be ignored by Git.
- **.prettierrc.json:** Prettier configuration file for code formatting rules.
- **env.d.ts:** TypeScript declaration file for environment variables.
- **index.html:** Main HTML template where the Vue app is mounted.
- **package.json:** Node.js package configuration file listing dependencies and scripts.
- **package-lock.json:** Locks the versions of dependencies to ensure consistency.
- **README.md:** Project documentation file.
- **tsconfig.app.json:** TypeScript configuration specific to the application.
- **tsconfig.json:** Base TypeScript configuration file.
- **tsconfig.node.json:** TypeScript configuration specific to Node.js.
- **tsconfig.vitest.json:** TypeScript configuration for Vitest.
- **vite.config.ts:** Configuration file for Vite build tool.
- **vitest.config.ts:** Configuration file for Vitest testing framework.

## API
This project uses the [NewsAPI](https://newsapi.org/) to fetch news articles. 
You can read about available endpoints [here](https://newsapi.org/docs/endpoints).

## Environment Variables
It's a best practice to avoid hardcoding sensitive information like API keys directly in the code. 
Instead, you can use environment variables to store such information securely.

The API key for NewsAPI is stored in an environment variable. 
Sign up for a free API key at [NewsAPI](https://newsapi.org/) and integrate it into your `.env` file.

## State Management
The project uses [Pinia](https://pinia.vuejs.org/core-concepts/) for state management - 
the intuitive store for Vue.js.

## Icons
Font Awesome is the Internet's icon
library and toolkit. File `fontAwesome.ts` is used
to working with icons. You need to import needed icons and add them to the library: `library.add()`.
You can find the list of available icons on [Font Awesome website](https://fontawesome.com/).

After that, you can work with them by
using components such as `BaseIcon.vue`, `TextIcon.vue` or just using `<font-awesome-icon>` tag.

## Fonts
The project uses the [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto) font,
which is imported from [Google Fonts](https://fonts.google.com/) in the `index.html` file.

## Ensuring code quality and consistency
The project uses [ESLint](https://eslint.org/) for linting and formatter [prettier](https://prettier.io/). 
You can customize their settings in `.eslintrc.cjs` and `.prettierrc.json` files respectively.

## Responsiveness
The design is responsive and looks good on various screen sizes, including desktops, tablets, and mobile 
devices. Media queries are used to adjust the layout and styles based on the screen size.

## Getting Started

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
