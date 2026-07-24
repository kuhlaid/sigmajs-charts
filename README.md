# sigmajs-charts

The goal of this code is to provide NodeJs graph charting using SigmaJs charts using external data. The initial thought was to use NextJs but we do not need the full stack capabilities of NextJs so we are trying Vite.

## Getting setup

- Created a blank repository in GitHub
- Used the `Code` button in the main page of the new repository in GitHub to open Codespaces
- Creating a `code` directory at the root and using `cd code` within the terminal window of Codespaces, then use the command `npx create-next-app@latest .` to load the starter NextJs application code
- next run `yarn dev`
- (not sure if this does anything but tried the following command)`gh codespace ports visibility 3000:public -c $CODESPACE_NAME` (this will allow you to access the following URL locally to view the app)
- run `echo $CODESPACE_NAME` and copy the value then within another web browser tab run `https://[your-codespace-name]-3000.app.github.dev` 


## Adding extra packages

- run `yarn add graphology`
- run `yarn add sigma`
- run `yarn add graphology-gexf`
- run `yarn create storybook` # installs Storybook and creates a `stories` directory

- next you will need to run `gh codespace ports visibility 6006:public -c $CODESPACE_NAME` and allow the browser to redirect to the codespace
- To run Storybook, run `yarn storybook`