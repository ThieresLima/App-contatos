import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Incorrect email/password combination.");
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new Error("Incorrect email/password combination.");
    }

    const token = sign({}, 'secrete123', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}
