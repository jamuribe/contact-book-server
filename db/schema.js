import mongoose from './dataBase.js';

const Contact = mongoose.model('Contacts', mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
  number: { type: Number, required: true },
  edited: Array,
  picture: String
}))


export default Contact;
