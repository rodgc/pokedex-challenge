# Pokedex Challenge

## GOAL

Create a small project using PokéAPI with the follow requirements:

- Search Pokemon by name using PokéAPI.
- Show basic info of the searched pokemon.
- Add pokemon to favorites.
- Make a page to list your favorite pokemon.
- Remove a pokemon from my list.
- Save my favorite pokemon even if I refresh my page.

## UI/UX

Suggested to have at least two pages and one searchbar, everything else is up to you.

## Bonus

- Use ES6+ syntax.
- Having a nice UI.
- Using common tools for your daily development environment (linterns, code formatting, etc)

### Recommended libraries

- Axios
- Redux
- styled-components

> Note: You can use create-react-app to bootstrap the project.

## Available Scripts

In the project directory, you can run:

- `npm run start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run test` - launches the test runner in the interactive watch mode.

- `npm run build` - builds the app for production to the `build` folder.

- `npm run eject` - exposes content of `react-script` package

- `npm run lint` - lints project files according to eslint rules, see below. Typical use case: continuous integration environments, Travis, CircleCI, etc.

- `npm run fix` - same as `npm run lint`, but also fixes errors, when possible. Typical use case: local development environment, git hooks.

## Redux configuration

The template provides basic Redux configuration with [feature based](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks) folder structure. You can use [Redux devtools browser extension](http://extension.remotedev.io/). Sample feature included in `src/features` folder, note technology agnostic `features` folder name. Based on Redux maintainers recommendation.

## Testing

Testing is done with [Enzyme](https://airbnb.io/enzyme/).

## [Prettier](https://prettier.io/)

I added `prettier` to force consistent formatting.

## Styles/CSS/Styling

I used [Materialize](https://materializecss.com/).
