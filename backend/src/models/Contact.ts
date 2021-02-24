import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column()
  avatar: string;

  @Column()
  user_id: string;
}

export default Contact
