import http from 'http'

const carros = [
    {'id':1, 'marca':'Tesla', 'modelo': 'Tesla S Plaid', 'ano': '2021'},
    {'id':2, 'marca':'Peugeot', 'modelo': 'Peugeot 206', 'ano': '2021'},
    {'id':3, 'marca':'Audi', 'modelo': 'Audi A4', 'ano': '2021'},
    {'id':4, 'marca':'Audi', 'modelo': 'Audi A5', 'ano': '2021'}
]

const String = JSON.stringify(carros)
const json = JSON.parse(String)

const server = http.createServer((req, res) => {
    res.setHeader({'Access-Control-Allow-Origin':'*'})
    res.writeHead()
})