// //Required packages
// 'use strict';


// const express = require('express');
// const router = express.Router();

// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();
// const morgan = require('morgan');


// const { Users } = require('./models');

// router.get('/', (req, res) => {

//     Users
//         .find()
//         .limit(10)
//         .exec()
//         .then(users => {
//             res.json({
//               users: users.map(
//                 (users) => users.serialize())
//             });
//           })
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: 'something went terribly wrong' });
//         });
// });

// router.post('/', (req, res) => {

//     const requiredFields = ['username', 'password'];
//     const hashedPassword = bcrypt.hashSync(submittedPassword, 10);

    
//     Users
//         .create({
//             username: req.body.username,
//             password: req.body.password
//         })
//         .then(user => res.status(201).json(user.serialize()))
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ message: 'Internal server error' });
//         });
    
// });

// module.exports = router;