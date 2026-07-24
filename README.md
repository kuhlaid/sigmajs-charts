# sigmajs-charts

The goal of this code is to provide NodeJs graph charting using SigmaJs charts using external data. The initial thought was to use NextJs but we do not need the full stack capabilities of NextJs so we are trying Vite.

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