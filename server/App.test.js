// index.js

const express = require('express');
const request = require('supertest');
const chai = require('chai');

const expect = chai.expect; 

const createApp = () => {
  app = express();

  var router = express.Router();
  router.route('/').get((res) => {
    return res.json({goodCall: true});
  });

  app.use(router);

  return app;
}

describe('Our server', () => {
  const app = createApp();

  it('should send back a JSON object with goodCall set to true', () => {
    request(app)
      .get('/index')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        if (err) { return; }
        callStatus = res.body.goodCall;

        expect(callStatus).to.equal(true);
      })
  });
});
