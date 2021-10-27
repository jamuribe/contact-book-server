import ContactsDB from "../db/schema.js";

const getAll = async () => {
  try {
    const contacts = await ContactsDB.find({})
    return contacts;
  } catch (error) {
    console.log('Error: 0.1 ', error);
  }
}

const updateOne = async (contact) => {
  try {
    await ContactsDB.findOneAndUpdate(
      { id: contact.id },
      {
        name: contact.name,
        email: contact.email,
        number: contact.number,
        edited: contact.edited,
        picture: contact.picture
      })
  } catch (error) {
    console.log('Couldn\'t update contact. ', error)
  }
}

const addOne = async (contact) => {
  try {
    await ContactsDB.create({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      number: contact.number,
      edited: contact.edited,
      picture: contact.picture
    })
  } catch (error) {
    console.log('Couldn\'t add contact. ', error)
  }
}

const deleteOne = async (contact) => {
  try {
    await ContactsDB.findOneAndDelete({
      id: contact.id
    })
  } catch (error) {
    console.log('Couldn\'t delete contact. ', error)
  }
}

export default { getAll, updateOne, addOne, deleteOne }