import Country from './Country'

const Countries = ({countries, filter}) => {
  if (!filter) {
    return
  }
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase()))

  if (filteredCountries.length === 1) {
    return (
        <div>
            <Country country={filteredCountries[0]}/>
        </div>
    )

  } else if (filteredCountries.length <= 10) {
    return (
      <div>
        {filteredCountries.map(country => <p key={country.cca3}>{country.name.common}</p>)}
      </div>
    )
  } else {
    return (
        <p>Too many matches, specify another filter</p>
    )
  }
}

export default Countries