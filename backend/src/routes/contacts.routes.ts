import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateContactService from '../services/CreateContactService';
import GetContactUserService from '../services/GetContactUserService';
import GetByIdContactService from '../services/GetByIdContactService';
import UpdateContactService from '../services/UpdateContactService';
import DeleteContactService from '../services/DeleteContactService';

const contactsRouter = Router();

// middleware
contactsRouter.use(ensureAuthenticated)

contactsRouter.post('/', async (req, res) => {
  try {
    const {
      name,
      number,
      email,
      avatar,
    } = req.body;

    const user_id = req.user.id;

    const contactService = new CreateContactService();

    const contact = await contactService.execute({
      name,
      number,
      email,
      avatar,
      user_id
    });

    res.status(201).json(contact);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

contactsRouter.get('/', async (req, res) => {
  try {
    const user_id = req.user.id;

    const getContactUser = new GetContactUserService();

    const contact = await getContactUser.execute({
      user_id
    });

    res.status(200).json(contact);
  } catch(err) {
    res.status(401).json({message: err.message});
  }
});

contactsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const getById = new GetByIdContactService();

    const contact = await getById.execute({
      id
    });

    res.status(200).json(contact);
  } catch(err) {
    res.status(401).json({message: err.message});
  }
});

contactsRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      number,
      email,
      avatar,
    } = req.body;

    const updateContact = new UpdateContactService();

    const contact = await updateContact.execute({
      id,
      name,
      number,
      email,
      avatar,
    });

    res.status(200).json(contact)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

contactsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleteContact = new DeleteContactService();

    await deleteContact.execute({
      id
    });

  res.status(200).json({ message: 'Deleted contact' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default contactsRouter;
