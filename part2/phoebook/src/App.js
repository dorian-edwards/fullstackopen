import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('name')

  const handleInput = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    for (let person of persons) {
      if (newName === person.name) {
        setNewName('')
        return alert(`${newName} is already in the phone book`)
      }
    }
    const newPerson = { name: newName }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((obj, i) => (
        <div key={obj.name}>{obj.name}</div>
      ))}
    </div>
  )
}

export default App
