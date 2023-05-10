const Person = ({person}) => {
    return <p>{person.name} {person.number}</p>
}
  
const Persons = (props) => {
  const filteredPersons = props.persons.filter(person =>
    person.name.toLowerCase().includes(props.filter.toLowerCase()))
    return (
      <div>
        {filteredPersons.map(person => <Person key={person.name} person={person} />)}
      </div>
    )
}

export default Persons