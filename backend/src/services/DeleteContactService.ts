import { getCustomRepository } from 'typeorm';

import ContactsRepository from '../repositories/ContactsRepository';

interface IRequest {
  id: string;
}

export default class DeleteContactService {
  public async execute({ id }: IRequest): Promise<void> {
    const contactRepository = getCustomRepository(ContactsRepository);

    const contact = await contactRepository.findById(id);

    if (!contact) {
      throw new Error('Contact does not exist');
    }

    await contactRepository.delete({ id: id });
  }
}
