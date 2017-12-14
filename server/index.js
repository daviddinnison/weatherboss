const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();


global.app = app;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



let server;
function runServer() {
    let databaseUri =
        process.env.DATABASE_URI ||
        global.databaseUri ||
        'mongodb://weatherbossuser:sillypineapple2@ds137206.mlab.com:37206/weatherboss';
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUri).then(function () {
        app.listen(process.env.PORT || 3001, err => {
            if (err) {
                console.error(err);
                return err;
            }
            console.log('Listening on localhost:3001');
        });
    });
}

const { Users } = require('./models');

app.get('/api/users', (req, res) => {

    Users
        .find()
        // .limit(1)
        .exec()
        .then(users => {
            res.json({
              user: users.map(
                (users) => users.serialize())
            });
          })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'something went terribly wrong' });
        });
});

app.post('/api/users', (req, res) => {

    const requiredFields = ['username', 'password'];
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    // console.log('REQ BODY', req.body);

    Users
        .create({
            username: req.body.username,
            password: hashedPassword
        })
        .then(user => res.status(201).json(user.serialize()))
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
});


function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app,
    runServer,
    closeServer
};
