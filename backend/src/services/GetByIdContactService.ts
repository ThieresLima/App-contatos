import { getCustomRepository } from 'typeorm';

import Contact from '../models/Contact';

import ContactsRepository from '../repositories/ContactsRepository';

interface IRequest {
  id: string;
}

export default class GetByIdContactService {
  public async execute({ id }: IRequest): Promise<Contact> {
    const contactRepository = getCustomRepository(ContactsRepository);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new Error('Contact does not exist');
    }

    return contact;
  }
}
