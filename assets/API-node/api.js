const express = require('express')
const app = express()
const port = 80

const bodyparser = require('body-parser')

const MongoClient = require('mongodb').objectID
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
    const user = await db.collection('users').insertOne(req.body)
    console.log('dados Adicionados', user)
    res.json({ id: user.insertedId })

})

app.get('/users/:id', async function getUser(req, res) {
    const user = await db.collection('users').findOne({ _id: objectId(req.params.id) })
    res.json(user)
})

app.put('/users/:id', async function updateUser(req, res) {
    const user = await db.collection('users').updateOne({ _id: objectId(req.params.id) }, {
        $set: req.body
    })
    res.json({ ok: 1 })
})

app.delete('/users', async function deleteUser(req, res) {
    const user = await db.collection('users').deleteOne({ _id: objectId(req.params.id) })

    if (user.deletedCount > 1) {
        res.json({ ok: 1 })
        console.log('usuario removido')
    } else {
        res.json({ ok: 1 })
        console.log('usuario ja foi removido')
    }
})

app.listen(port, function initServer() {
    console.log("servidor iniciado: https://localhost")
})
