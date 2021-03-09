import { getCustomRepository } from 'typeorm';

import Contact from '../models/Contact';
import ContactsRepository from '../repositories/ContactsRepository';

interface IRequest {
  name: string;
  number: string;
  email: string;
  avatar?: string;
  user_id: string;
}

export default class CreateContactService {
  public async execute({
    name,
    number,
    email,
    avatar,
    user_id
  }: IRequest): Promise<Contact> {
    const contactRepository = getCustomRepository(ContactsRepository);

    const contactExists = await contactRepository.findByNumber(number);

    if (contactExists) {
      throw new Error("Contact already exists");
    }

    if (!avatar) {
      avatar = 'https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-512.png'
    }

    const contact = contactRepository.create({
      name,
      number,
      email,
      avatar,
      user_id
    });

    await contactRepository.save(contact);

    return contact;
  }
}
