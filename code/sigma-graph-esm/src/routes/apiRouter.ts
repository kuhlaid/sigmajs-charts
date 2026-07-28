import { Router } from 'express';

import Paths from './../common/constants/Paths.ts';
import SigmaChartRoutes from './SigmaChartRoutes.ts';
import UserRoutes from './UserRoutes.ts';

/******************************************************************************
                                Setup
******************************************************************************/

const apiRouter = Router();

// ----------------------- Add UserRouter --------------------------------- //

const userRouter = Router();

userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

apiRouter.use(Paths.Users._, userRouter);

// ----------------------- Add SigmaChartRouter --------------------------------- //

const sigmaChartRouter = Router();

sigmaChartRouter.get(Paths.SigmaChart.CreateTest1, SigmaChartRoutes.createTest1);
sigmaChartRouter.get(Paths.SigmaChart.SubmitPost, SigmaChartRoutes.submitPost);
sigmaChartRouter.post(Paths.SigmaChart.CreatePost, SigmaChartRoutes.createTestPost);

apiRouter.use(Paths.SigmaChart._, sigmaChartRouter);

/******************************************************************************
                                Export
******************************************************************************/

export default apiRouter;
