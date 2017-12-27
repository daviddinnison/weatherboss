const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const cors = require('cors')
const {CLIENT_ORIGIN} = require('../config');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();
global.app = app;
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

const { Users } = require('../models');

router.get('/', (req, res) => {
    Users
        .find()
        .exec()
        .then(users => {
            res.json({
                users: users.map(
                    (users) => users.serialize())
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'something went terribly wrong' });
        });
});


router.post('/', (req, res) => {
    //checks that user and password exists
    console.log(req.body, 'REQ BODY........')
    const requiredFields = ['username', 'password'];
    const missingField = requiredFields.find(field => !(field in req.body));
    if (missingField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Missing field',
            location: missingField
        });
    }

    //checks that user and password are strings
    const stringFields = ['username', 'password'];
    const nonStringField = stringFields.find(field =>
        (field in req.body) && typeof req.body[field] !== 'string'
    );
    if (nonStringField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Incorrect field type: expected string',
            location: nonStringField
        });
    }

    //checks to make sure there is no whitespace before or after username and password
    const explicityTrimmedFields = ['username', 'password'];
    const nonTrimmedField = explicityTrimmedFields.find(
        field => req.body[field].trim() !== req.body[field]
    );
    if (nonTrimmedField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Cannot start or end with whitespace',
            location: nonTrimmedField
        });
    }
    //set required size for fields
    const sizedFields = {
        username: {
            min: 4,
            max: 15
        },
        password: {
            min: 4,
            max: 72
        }
    };
    const tooSmallField = Object.keys(sizedFields).find(
        field =>
            'min' in sizedFields[field] &&
            req.body[field].trim().length < sizedFields[field].min
    );
    const tooLargeField = Object.keys(sizedFields).find(
        field =>
            'max' in sizedFields[field] &&
            req.body[field].trim().length > sizedFields[field].max
    );
    //checks to make sure fields are not too big or too small
    if (tooSmallField || tooLargeField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: tooSmallField
                ? `Must be at least ${sizedFields[tooSmallField]
                    .min} characters long`
                : `Must be at most ${sizedFields[tooLargeField]
                    .max} characters long`,
            location: tooSmallField || tooLargeField
        });
    }


    let { username, password } = req.body;
    return Users.find({username})
    .count()
    //checks that username is not taken
    .then(count => {
      if (count > 0) {
        return Promise.reject({
          code: 422,
          reason: 'ValidationError',
          message: 'Username already taken',
          location: 'username'
        });
      }
    })
    .then(user => {
      return Users.create({
        username,
        password: bcrypt.hashSync(req.body.password, 10)
      });
    })
    .then(user => {
      return res.status(201).json(user.serialize());
    })
    .catch(err => {
      if (err.reason === 'ValidationError') {
        return res.status(err.code).json(err);
      }
      res.status(500).json({code: 500, message: 'Internal server error'});
    });
});

module.exports = router;