import { getCustomRepository } from 'typeorm';

import Contact from '../models/Contact';

import ContactsRepository from '../repositories/ContactsRepository';

interface IRequest {
  id: string;
  avatar?: string;
  name: string;
  number: string;
  email: string;
}

export default class UpdateContactService {
  public async execute(contactData: IRequest): Promise<Contact> {
    const contactRepository = getCustomRepository(ContactsRepository);

    const contact = await contactRepository.findById(contactData.id);

    if (!contact) {
      throw new Error('Contact does not exist');
    }

    if (contact.number !== contactData.number) {
      const numberExists = await contactRepository.findByNumber(contactData.number);

      if (numberExists) {
        throw new Error("Contact already exists");
      }
    }

    const contactUpdated = contactRepository.merge(contact, contactData);

    return await contactRepository.save(contactUpdated);
  }
}
