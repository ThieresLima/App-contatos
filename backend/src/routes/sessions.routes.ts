import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    user.password = '';

    res.status(200).json({ user, token });

  } catch(err) {
    res.status(401).json({ message: err.message });
  }
});

export default sessionsRouter;
