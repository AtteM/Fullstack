require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('body', req => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

// TODO
app.get('/info', (req, res) => {
  //res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}<p>`)
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person)
  })
})

// TODO
app.delete('/api/persons/:id', (req, res) => {
  /*
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
  */
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!req.body.name) {
    return res.status(400).json({
      error: 'name missing'
    })
  }

  if (!req.body.number) {
    return res.status(400).json({
      error: 'number missing'
    })
  }

  const person = new Person({
    name: req.body.name,
    number: req.body.number
  })
  
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
