const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

router.use(bodyParser.json());

// Create a new user in DB
router.post('/', (req, res) => {
  const requiredFields = ['username', 'password'];
  const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  if (missingIndex !== -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  let { username, password } = req.body;
  username = username.trim();
  password = password.trim();

  let hashedPassword;

  bcrypt.hash(password, 10)
    .then(result => {
      hashedPassword = result;

      return req.app.locals.knex
        .insert({
          username,
          password: hashedPassword
        })
        .into('users')
        .returning(['username', 'password']);
    })
    .then(() => {
      res.status(201).json({ message: 'user create success' });
    })
    .catch(error => {
      res.status(500).json({ message: 'error creating user' });
    });
});

module.exports = router;