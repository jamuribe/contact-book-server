import mongoose from "./dataBase.js";

const contactSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  edited: Array
}, // eslint-disable-next-line comma-dangle
  {
    timestamps: true
  });

const ContactsDB = mongoose.model('Contacts', contactSchema);

export default ContactsDB;