import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])

  const [newName, setNewName] = useState('name')
  const [newNumber, setNewNumber] = useState('000-000-0000')
  const [filter, setFilter] = useState('')

  const handleName = (e) => setNewName(e.target.value)

  const handleNumber = (e) => setNewNumber(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    for (let person of persons) {
      if (newName === person.name) {
        setNewName('')
        return alert(`${newName} is already in the phone book`)
      }
    }
    const newPerson = { name: newName, number: newNumber }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleFilter = (e) => setFilter(e.target.value)

  const eligibleEntries = filter
    ? persons.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Show entries containing:
        <input value={filter} onChange={handleFilter} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {eligibleEntries.map((obj, i) => (
        <div key={obj.name}>
          {obj.name} {obj.number}
        </div>
      ))}
    </div>
  )
}

export default App
