import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const userExists = await userRepository.findByEmail(email);

    if (userExists) {
      throw new Error("Email address already used");
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;
  }
}
