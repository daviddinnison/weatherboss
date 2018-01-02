const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const usersRouter = require('./features/users');
const authRouter = require('./features/auth');

const morgan = require('morgan');
app.use(morgan('common'));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

//server functions
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

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);


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
