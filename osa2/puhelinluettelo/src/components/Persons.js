const Person = ({person, removePerson}) => {
  return <p>{person.name} {person.number} <button onClick={() => removePerson(person.id)}>delete</button></p>
}
  
const Persons = (props) => {
  const filteredPersons = props.persons.filter(person =>
    person.name.toLowerCase().includes(props.filter.toLowerCase()))
  return (
    <div>
      {filteredPersons.map(person => <Person key={person.name} person={person} removePerson={props.removePerson}/>)}
    </div>
  )
}

export default Persons