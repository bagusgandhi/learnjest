import request from 'supertest'
import express from 'express'
import router from '../routes/main.js'

const app = new express()
app.use('/', router)

describe('Test Route', () => {
    // routes '/'
    test('responds to /', async () => {
        const res = await request(app).get('/')
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
        expect(res.statusCode).toBe(200)
        expect(res.text).toEqual('hello world')
    })
    // test route '/hello/name'
    test('responds to /hello/:name', async () => {
        const res = await request(app).get('/hello/gandhi')
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
        expect(res.statusCode).toBe(200)
        expect(res.text).toEqual('hello gandhi')
    })
})