import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateContactService from '../services/CreateContactService';
import GetContactUserService from '../services/GetContactUserService';

const contactsRouter = Router();

// middleware
contactsRouter.use(ensureAuthenticated)

contactsRouter.post('/', async (req, res) => {
  try {
    const {
      name,
      number,
      avatar,
    } = req.body;

    const user_id = req.user.id;

    const contactService = new CreateContactService();

    const contact = await contactService.execute({
      name,
      number,
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

export default contactsRouter;
