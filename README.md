# QAQ

![Deploy to Github Pages](https://github.com/SEQAQ/qaq-react/workflows/Deploy%20to%20Github%20Pages/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a2adae3c-9901-42a5-8d68-6a006fe26bff/deploy-status)](https://app.netlify.com/sites/qaq-react/deploys)

💡 QAQ Frontend: A university QA community powered by [React](https://github.com/facebook/create-react-app)

## Collabration Tips

### Branches

We use [master](https://github.com/SEQAQ/qaq-react/tree/master) as main branch and [dev](https://github.com/SEQAQ/qaq-react/tree/dev) for development.
Other branches can be freely created and then merged by **pull requests**.

### Code Styles

We use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to lint and format our code, yielding uniform code styles. We name all variables and functions with [camel case](https://en.wikipedia.org/wiki/Camel_case).

## Getting Started

First, install `yarn`:

```shell script
npm install -g yarn
```

Install dependencies:

```shell script
yarn
```

Start developing:

```shell script
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

To format code:

```shell script
yarn format
yarn format:staged  # format staged files only
yarn format:check # lint and check the format of all files
```

In the project directory, you can also run:

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
