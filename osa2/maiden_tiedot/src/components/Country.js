const Country = ({country}) => {
    
    const altName = `Flag of ${country.name.common}`
    return (
        <div>
          <h1>{country.name.common}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <p><b>languages:</b></p>
          <ul>
            {Object.keys(country.languages).map(key =><li key={key}>{country.languages[key]}</li>)}
          </ul>
          <img style={{ width: "10%", height: "10%" }} src={country.flags.png} alt={altName}></img>
        </div>
    )
}

export default Country