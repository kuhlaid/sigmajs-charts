import { Router } from 'express';

import Paths from '@src/common/constants/Paths';
import SigmaChartRoutes from './SigmaChartRoutes';
import UserRoutes from './UserRoutes';

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
sigmaChartRouter.post(Paths.SigmaChart.CreatePost, SigmaChartRoutes.createTestPost);

apiRouter.use(Paths.SigmaChart._, sigmaChartRouter);

/******************************************************************************
                                Export
******************************************************************************/

export default apiRouter;
