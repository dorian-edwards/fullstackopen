import { useState, useEffect } from 'react'
import Data from './components/Data'
import Filter from './components/Filter'
import Form from './components/Form'
import { getAll, create } from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])

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

    create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
    })

    setNewName('')
    setNewNumber('')
  }

  const handleFilter = (e) => setFilter(e.target.value)

  const eligibleEntries = filter
    ? persons.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons

  useEffect(() => {
    getAll().then((initialEntries) => {
      setPersons(initialEntries)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilter} />
      <Form
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber}
        onSubmit={handleSubmit}
      />
      <Data entries={eligibleEntries} />
    </div>
  )
}

export default App
