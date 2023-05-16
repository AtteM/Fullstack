import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
    
  const addPerson = (event) => {
    event.preventDefault()
    const result = persons.find(({name}) => name === newName)
    const personObject = {name: newName, number: newNumber}

    if (result !== undefined) {
      if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(result.id, personObject)
          .then((returnedPerson) => {
          setPersons(persons.map(person => person.id !== result.id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
      return
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const removePerson = (id) => {
    const personObject = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personObject.name}?`)) {
      personService
        .remove(id)
        .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange}/>
      <PersonForm addPerson={addPerson} name={newName} number={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter} removePerson={removePerson}/>
    </div>
  )
}

export default App