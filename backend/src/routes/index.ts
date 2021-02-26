import express from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = express();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
