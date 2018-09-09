const uuid = require('uuid/v4');
const session = require('express-session');

module.exports = (app) => {
  app.use(session({
    genid: (req) => {
      console.log('inside session middleware');
      console.log(req.sessionID);
      return uuid();
    },
    //TODO Replace with random string from environment variable
    secret: 'mamaliga of destruction',
    resave: false,
    saveUninitialized: true
  }))
  app.get('/api/auth', (req, res) => {
    console.log('inside the homepage callback function');
    console.log(req.sessionID)
    res.send(`Hit home page1\n`)
  })
};