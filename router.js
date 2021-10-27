import express from 'express';
import controllers from './controllers/controllers.js';

const router = express.Router();

router
  .get('/', (req, res) => {
    res.send('Here we go')
  })
  .get('/contacts', controllers.getAllContacts)
  .post('/update', controllers.updateContact)
  .delete('/erase', controllers.deleteContact)
  .post('/add/contact', controllers.addContact)
  .post('add/random/contact', controllers.addRandomContact)


export default router;