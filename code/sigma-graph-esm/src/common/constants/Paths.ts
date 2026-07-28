/**
 * This file contains the paths used in the application. This is where the routing magic happens.
 * This file is used in conjunction with apiRouter.ts, which maps the routes to functions.
 */

import jetPaths from 'jet-paths';

const Paths = {
  _: '/api',
  Users: {
    _: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
  SigmaChart: {
    _: '/sigmacharts',
    CreateTest1: '/createTest1',
    SubmitPost: '/submitPost',
    CreatePost: '/createTestPost',
  },
} as const;

export const JetPaths = jetPaths(Paths);
export default Paths;
