import { EntityRepository, Repository } from 'typeorm';

import Contact from '../models/Contact';

@EntityRepository(Contact)
class ContactsRepository extends Repository<Contact> {
  public async findById(id: string): Promise<Contact | undefined> {
    const contact = await this.findOne(id);

    return contact;
  }

  public async findByNumber(number: string): Promise<Contact | undefined> {
    const contact = await this.findOne({
      where: { number }
    });

    return contact;
  }

  public async findByUser_id(user_id: string): Promise<Contact[] | undefined> {
    const contact = await this.find({
      where: { user_id: user_id },
      order: { name: 'ASC' },
    });

    return contact;
  }
}

export default ContactsRepository;
