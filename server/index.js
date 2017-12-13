const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');


const app = express();


global.app = app;

console.log('TEST')



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
