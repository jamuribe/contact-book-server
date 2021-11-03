import Contacts from "../schema.js";

const getAll = async () => {
  try {
    const contacts = await Contacts.find({})
    return contacts;
  } catch (error) {
    console.log('Error: 0.1 ', error);
  }
}

const updateOne = async (contact) => {
  try {
    await Contacts.findOneAndUpdate(
      { _id: contact.data.contact._id },
      {
        name: contact.data.contact.name,
        email: contact.data.contact.email,
        number: Number(contact.data.contact.number),
        edited: contact.data.contact.edited,
        picture: contact.data.contact.picture
      }, { 'new': 'true' });
  } catch (error) {
    console.log('Couldn\'t update contact. ', error)
  }
}

const addOne = async (contact) => {
  await Contacts.init();

  try {
    await Contacts.create({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      number: contact.number,
      edited: contact.edited,
      picture: contact.picture
    })
  } catch (error) {
    console.log('Couldn\'t add contact. User already exists', error)
  }
}

const deleteOne = async (contact) => {
  try {
    await Contacts.findOneAndDelete({
      _id: contact.contact._id
    })
  } catch (error) {
    console.log('Couldn\'t delete contact. ', error)
  }
}

const findOne = async (contact) => {
  try {
    await Contacts.findOne({ email: contact.email })
  } catch (error) {
    console.log('Couldn\'t find contact. ', error)

  }
}

export default { getAll, updateOne, addOne, deleteOne, findOne }