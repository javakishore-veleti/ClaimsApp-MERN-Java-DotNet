# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Setup

```shell
npx create-react-app tickets-app

cd tickets-app

npm install --save react-router-dom
npm audit fix --force
npm audit fix --force
npm audit fix --force

# Bootstrap install
npm install react-bootstrap bootstrap

mkdir -p src/sub-modules/tickets/components
mkdir -p src/sub-modules/tickets/pages
touch src/sub-modules/tickets/components/TicketsList.js
touch src/sub-modules/tickets/components/TicketsList.css
touch src/sub-modules/tickets/components/TicketsSearch.js
touch src/sub-modules/tickets/components/TicketsSearch.css
touch src/sub-modules/tickets/components/TicketCreate.js
touch src/sub-modules/tickets/components/TicketCreate.css

touch src/sub-modules/tickets/components/TicketEdit.js
touch src/sub-modules/tickets/components/TicketEdit.css

touch src/sub-modules/tickets/pages/TicketsListPage.js

touch src/sub-modules/tickets/pages/TicketsSearchPage.js

touch src/sub-modules/tickets/pages/TicketCreatePage.js

touch src/sub-modules/tickets/pages/TicketEditPage.js


mkdir -p src/sub-modules/shared/pages
touch src/sub-modules/shared/pages/HomePage.js
touch src/sub-modules/shared/pages/HomePage.css

touch src/sub-modules/shared/pages/AboutPage.js
touch src/sub-modules/shared/pages/AboutPage.css

mkdir -p src/sub-modules/shared/components/navbar
touch src/sub-modules/shared/components/navbar/AppNavBarBootStrap.js
touch src/sub-modules/shared/components/navbar/AppNavBarBootStrap.css

# in public/index.html Add below line
# href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"

# Add JS code for Bootstrap navbar in src/sub-modules/shared/components/navbar/AppNavBarBootStrap.js
# Code in  AppNavBarBootStrap.js is copied from this react-bootstrap website page https://react-bootstrap.github.io/components/navbar/

# Now do coding of src/sub-modules/shared/pages/HomePage.js



```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
