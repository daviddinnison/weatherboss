'use strict';
const {localStrategy, jwtStrategy} = require('./strategies');
const {router} = require('./router');

module.exports = {router, localStrategy, jwtStrategy};
