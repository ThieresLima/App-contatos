import { getCustomRepository } from 'typeorm';

import Contact from '../models/Contact';

import ContactsRepository from '../repositories/ContactsRepository';

interface IRequest {
  user_id: string;
}

export default class GetContactUserService {
  public async execute({ user_id }: IRequest): Promise<Contact[]> {
    const contactRepository = getCustomRepository(ContactsRepository);

    const contact = await contactRepository.findByUser_id(user_id);

    if (!contact || contact.length === 0) {
      throw new Error("User has no contact");
    }

    return contact;
  }
}
