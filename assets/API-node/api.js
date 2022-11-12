const express = require('express')
const app = express()
const port = 80

const bodyparser = require('body-parser')

const MongoClient = require('mongodb').MongoClient
let db = null

const client = new MongoClient('mongodb://localhost:27017');
client.connect(function initDataBase(err) {
    console.log("conexão com Banco de dados funciona.")
    db = client.db('api')
})

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.get('/users', async function listUser(req, res) {
    const users = await db.collection('users').find({}).toarray()
    res.json(users)
})
app.post('/users', async function insertUser(req, res) {
    const user = await db.collection('users').insertOne()
    console.log('dados Adicionados', req.body)
    res.json({ ok: 1 })
})

app.get('/users/:id', async function getUser(req, res) {
    const users = await db.collection('users').findOne({ _id: req.params.id })
    res.json(user)
})

app.put('/users/:id', async function name(req, res) {

})


app.delete('/users')

app.listen(port, function initServer() {
    console.log("servidor iniciado: https://localhost")
})