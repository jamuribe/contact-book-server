import ContactsDB from "../db/schema.js";

const contactsInDB = await ContactsDB.create({
  'name': "Joes Ant",
  'email': "ant@gmailc.o",
  'number': 666,
  'edited': [],
  'picture': 'https://thispersondoesnotexist.com/image'
});

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
      { _id: contact.data.contact._id },
      {
        name: contact.data.contact.name,
        email: contact.data.contact.email,
        number: Number(contact.data.contact.number),
        edited: contact.data.contact.edited,
        picture: contact.data.contact.picture
      }, { 'new': 'true' });
    contactsInDB.save()
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
      _id: contact.contact._id
    })
  } catch (error) {
    console.log('Couldn\'t delete contact. ', error)
  }
}

const findOne = async (contact) => {
  try {
    await ContactsDB.findOne({ email: contact.email })
  } catch (error) {
    console.log('Couldn\'t find contact. ', error)

  }
}

export default { getAll, updateOne, addOne, deleteOne, findOne }