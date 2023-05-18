import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange}/>
      <Countries countries={countries} filter={newFilter} setNewFilter={setNewFilter}/>
    </div>
  )

}

export default App
