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

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const body = req.body

  if (!req.body.name) {
    const error = new Error('name missing')
    error.name = 'EmptyNameError'
    next(error)
    return
  }

  if (!req.body.number) {
    const error = new Error('number missing')
    error.name = "EmptyNumberError"
    next(error)
    return
  }

  const person = new Person({
    name: req.body.name,
    number: req.body.number
  })
  
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

// olemattomien osoitteiden käsittely
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'EmptyNameError') {
    return res.status(400).send({ error: error.message })
  } else if (error.name === 'EmptyNumberError') {
    return res.status(400).send({ error: error.message })
  }

  next(error)
}

// virheellisten pyyntöjen käsittely
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
