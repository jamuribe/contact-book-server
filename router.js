import express from 'express';
import controllers from './controllers/controllers.js';

const router = express.Router();

router
  .get('/', controllers.getAllContacts)
  .put('/update', controllers.updateContact)
  .delete('/erase', controllers.deleteContact)
  .post('/add', controllers.addContact)
  .post('/random', controllers.addRandomContact);

export default router;
