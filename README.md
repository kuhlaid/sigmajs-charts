# sigmajs-charts

The goal of this code is to provide NodeJs graph charting using SigmaJs charts from external data. The initial thought was to use NextJs but we do not need the full stack capabilities of NextJs so we switched to Vite. Changing yet again to ExpressJs.

## ExpressJs setup

- see instructions at `https://expressjs.com/en/5x/starter/installing/`
- run `cd code`
- run `yarn add express`
- run `yarn add --dev typescript @types/express @types/node`
- Add a tsconfig.json
- run `yarn dlx express-generator --view=ejs sigma-graph` (this will create a starter app that is more useful than the most basic build)
- run `cd sigma-graph`
- run `yarn install` (this will pull in the modules needed for the app)
- run `yarn add sigma graphology` (you should be in the `sigma-graph` app directory before running this command so the packages do not get committed to the code repository)
- run `yarn start` (make sure you are within the `sigma-graph` directory when running this script)

## ExpressJs setup 2 (blah)

- Copy existing generated Express code to `sigma-graph-es`
- Add `"type": "module",` to the package.json (This instructs Node.js to treat all .js files as ES Modules.)
- Open app.js and change all require() statements to import statements. Change module.exports to export default

## ExpressJs setup 3

Here we try to use the `express-generator-typescript` package to create a TypeScript version of Express. 

- run `yarn add express-generator-typescript`
- run `yarn dlx express-generator-typescript sigma-graph-esm`
- run `cd sigma-graph-esm`
- run `yarn add sigma graphology ejs graphology-types shx` (you should be in the `sigma-graph-esm` app directory before running this command so the packages do not get committed to the code repository); this will also update yarn; the `ejs` package is used to serve .ejs template files
- run `yarn add -D @types/express` since Express is written in javascript and does not have types assigned (this uses community defined types to help prevent typescript errors with the Express module)
- run `yarn dev:basic` (make sure you are within the `sigma-graph-esm` directory when running this script)

## Getting setup

- Created a blank repository in GitHub
- Used the `Code` button in the main page of the new repository in GitHub to open Codespaces
- Creating a `code` directory at the root and using `cd code` within the terminal window of Codespaces, then use the command `yarn create vite` to load the starter Vite application code (simply confirm the default settings) and Vite will automatically start the dev server at `http://localhost:5173/`


- (not sure if this does anything but tried the following command)`gh codespace ports visibility 3000:public -c $CODESPACE_NAME` (this will allow you to access the following URL locally to view the app)
- run `echo $CODESPACE_NAME` and copy the value then within another web browser tab run `https://[your-codespace-name]-3000.app.github.dev` 


## Adding extra packages

- run `cd code/vite-project` (you must be in the Vite project directory to start the local server)
- run `yarn add sigma graphology` (you should be in the `code/vite-project` directory before running this command so the packages do not get committed to the code repository)
- run `yarn dev` (to start the local server)

- next you will need to run `gh codespace ports visibility 6006:public -c $CODESPACE_NAME` and allow the browser to redirect to the codespace


## Setting up Vercel

- Create a new project in Vercel and point to the GitHub repository
- Set the framework to Vite
- Set the start directory to `code/vite-project` (or the root directory of your Vite project)