import { Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function unsureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction): void {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Error('JWT is missing');
  }

  const [, token] = authorization.split(' ');

  try {
    const data = verify(token, 'secrete123');

    const { sub } = data as TokenPayload;

    req.user = {
      id: sub,
    };

    next();
  } catch {
    res.status(401).json('invalid JWT token');
  }
}
