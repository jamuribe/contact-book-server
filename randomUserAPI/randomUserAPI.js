import axios from 'axios';

const convertNumber = (number) => {
  const phoneNumber = number.map((number) => {
    return parseInt(number.replace(/[^0-9]/g, ''), 10);
  });
  return Number(phoneNumber);
};

const getRandomUser = async (id) => {
  const user = {};

  await axios.get('https://randomuser.me/api/')
    .then(response => response.data.results[0])
    .then(result => {
      user.id = id;
      user.name = `${result.name.first} ${result.name.last}`;
      user.email = result.email;
      user.number = convertNumber([result.cell]);
      user.edited = [];
      user.picture = result.picture.large;
    }
    )
    .catch(error => {
      console.log('Couldn\'t add random user. ', error);
    });
  return user;
};

export default getRandomUser;
