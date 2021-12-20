import {index, hello} from '../routes/default.js'

describe('Test Handlers', () => {
    // test routes '/'
    test('responds to /', () => {
        const req = {}
        const res = {text: '', 
            send: function(input){this.text = input}
        }
        index(req, res)
        expect(res.text).toEqual('hello world')
    })

    // routes '/hello'
    test('responds to /hello/:name', () => {
        const req = {params: {name: 'bob'}}
        const res = {text: '', 
            send: function(input){this.text = input}
        }
        hello(req, res)
        expect(res.text).toEqual('hello bob')
        
    })
})