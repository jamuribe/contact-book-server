import dbRequest from "../requestToDB/requestToDB.js";
import getRandomUser from "../randomUserAPI/randomUserAPI.js";

const getAllContacts = async (req, res) => {
  try {
    const contacts = await dbRequest.getAll();
    res.send(contacts);
    res.status(200);
  } catch (error) {
    res.status(500);
    console.log('Error: 1 ', error);
  }
}

const updateContact = async (req, res) => {
  try {
    const contact = req.body;
    await dbRequest.updateOne(contact);
    res.send('Contact updated successfully.');
    res.status(201);
  } catch (error) {
    res.status(500);
    console.log('Error: 2 ', error);
  }
}

const addContact = async (req, res) => {
  try {
    const newContact = req.body;
    await dbRequest.addOne(newContact);
    res.send('New contact added successfully.');
    res.status(201);
  } catch (error) {
    res.status(500);
    console.log('Error: 3 ', error);
  }
}

const addRandomContact = async (req, res) => {
  try {
    const id = req.body.id;
    const contact = await getRandomUser(id);
    await dbRequest.addOne(contact);
    res.send('Random user successfully added');
    res.status(200)
  } catch (error) {
    res.status(500);
    console.log('Error: 4 ', error);
  }
}

const deleteContact = async (req, res) => {
  try {
    const contact = req.body;
    await dbRequest.deleteOne(contact);
    res.send('Contact deleted successfully.');
    res.status(201);
  } catch (error) {
    res.status(500);
    console.log('Error: 5 ', error);
  }
}

export default { getAllContacts, updateContact, addContact, deleteContact, addRandomContact };