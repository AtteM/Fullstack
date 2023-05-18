import Country from './Country'

const Countries = ({countries, filter, setNewFilter}) => {

  if (!filter) {
    return
  }
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase()))

  const exactMatch = countries.filter(country => country.name.common === filter)
  
  if (exactMatch.length === 1) {
    return (
        <div>
            <Country country={exactMatch[0]}/>
        </div>
    )
  } else if (filteredCountries.length === 1) {
    return (
        <div>
            <Country country={filteredCountries[0]}/>
        </div>
    )
  } else if (filteredCountries.length <= 10) {
    return (
      <div>
        {filteredCountries.map(country => <p key={country.cca3}>{country.name.common} <button onClick={() => setNewFilter(country.name.common)}>show</button></p>)}
      </div>
    )
  } else {
    return (
        <p>Too many matches, specify another filter</p>
    )
  }
}

export default Countries