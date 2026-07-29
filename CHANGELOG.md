# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4] - 2026-07-29

- [ ] trying NextJs again because the Express framework does not include everything needed and I am using too many modules that are not well developed

## [0.0.3] - 2026-07-28

- [ ] testing posting data to an endpoint
- [x] POST requests to the `app.github.dev` domain are likely blocked so requests will need to be tested on the build URL (e.g. vercel.com)
- [x] Make sure to perform a `yarn build` before pushing the code to ensure the build succeeds (although some errors do not appear locally)
- [x] needed to make a few updates to the configurations to help prevent errors and warnings
- [x] setting `"type": "module"` in the package.json file to force the build to use ESM instead of commonJs

## [0.0.2] - 2026-07-24

- [x] getting a good working example of the sigma graph chart generated through an EJS template

## [0.0.1] - 2026-07-24

- [x] changed to using the simple Vite framework instead of NextJs (since I did not need a full stack environment)
- [x] was able to get the code running on Vercel at sigmajs-charts.vercel.app
- [x] added simple example charts and different `pages`
- [x] switching to Express.js since we need the ability to read data posted to the app (ViteJs is simply for NodeJs builds and cannot read posted data)
