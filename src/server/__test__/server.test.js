import 'babel-polyfill'
const request = require('supertest')
const { app } = require('../index')

describe('test the main path "/" ', () => {
  test('server index load', (ok) => {
    request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toEqual(200)
        ok()
      })
  })
})