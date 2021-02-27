import express from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import contactsRouter from './contacts.routes';

const routes = express();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/contacts', contactsRouter)

export default routes;
