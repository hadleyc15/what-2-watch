const bcrypt = require('bcrypt');
const password = "12345"
const hash = bcrypt.hashSync(password, 10);


const {
  User
} = require('../models');

const userData = [{
  username: 'jon',
  email: 'jon@hotmail.com',
  password: hash,
  },
  {
    username: 'mel',
    email: 'mel@hotmail.com',
    password: hash,
  },
  {
    username: 'sam',
    email: 'sam@hotmail.com',
    password: hash,
  },
  {
    username: 'amy',
    email: 'amy@hotmail.com',
    password: hash,
  },
  {
    username: 'penny',
    email: 'penny@hotmail.com',
    password: hash,
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
