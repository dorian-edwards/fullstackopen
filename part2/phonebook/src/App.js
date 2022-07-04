import { useState, useEffect } from 'react'
import Data from './components/Data'
import Filter from './components/Filter'
import Form from './components/Form'
import { getAll, create, remove, update } from './services/phonebook'

const App = () => {
  // state
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('name')
  const [newNumber, setNewNumber] = useState('123-456-7890')
  const [filter, setFilter] = useState('')

  // misc utility
  const clear = () => {
    setNewName('')
    setNewNumber('')
  }

  // handlers
  const handleName = (e) => setNewName(e.target.value)
  const handleNumber = (e) => setNewNumber(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    const person = persons.find(
      (obj) => obj.name.toLowerCase() === newName.toLowerCase()
    )

    !person &&
      create({ name: newName, number: newNumber }).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        return clear()
      })

    const message = `${person.name} is already in the phonebook, replace old number with new one?`

    window.confirm(message) &&
      update(person.id, { ...person, number: newNumber }).then(
        (returnedPerson) => {
          setPersons(
            persons.map((p) =>
              p.id !== returnedPerson.id ? p : returnedPerson
            )
          )
          return clear()
        }
      )
  }
  const deleteHandler = (entry) => {
    window.confirm(`delete ${entry.name} ?`) &&
      remove(entry.id).then((deletedPerson) => {
        setPersons(persons.filter((p) => p.id !== entry.id))
      })
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
      <Data entries={eligibleEntries} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App
