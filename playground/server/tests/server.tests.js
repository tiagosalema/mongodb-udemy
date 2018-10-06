const supertest = require('supertest');
const expect = require('expect');

const app = require('./../app');
const {Todo} = require('./../models/todo');

describe('POST /todos', () => {
    it('should create a new todo', done => {
        var text = 'Test todo text';

        request(app)
          .post
    })
});
