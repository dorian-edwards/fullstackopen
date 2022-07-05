import { useState, useEffect } from 'react'
import Data from './components/Data'
import Filter from './components/Filter'
import Form from './components/Form'
import Notification from './components/Notification'
import { getAll, create, remove, update } from './services/phonebook'

const App = () => {
  // state
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('name')
  const [newNumber, setNewNumber] = useState('123-456-7890')
  const [filter, setFilter] = useState('')
  const [popUp, setPopUp] = useState(null)

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
        setPopUp({
          message: `${returnedPerson.name} added successfully`,
          type: 'success',
        })
        setTimeout(() => {
          setPopUp(null)
        }, 5000)
        return clear()
      })

    const message = `${person.name} is already in the phonebook, replace old number with new one?`

    window.confirm(message) &&
      update(person.id, { ...person, number: newNumber })
        .then((returnedPerson) => {
          setPersons(
            persons.map((p) =>
              p.id !== returnedPerson.id ? p : returnedPerson
            )
          )
          setPopUp({
            message: `${returnedPerson.name} number updated to ${returnedPerson.number}`,
            type: 'success',
          })
          setTimeout(() => setPopUp(null), 5000)
          return clear()
        })
        .catch((error) => {
          setPopUp({
            message: `Information of ${person.name} has already been removed from server`,
            type: 'error',
          })
          setPersons(persons.filter((p) => p.id !== person.id))
          setTimeout(() => setPopUp(null), 5000)
        })
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
      {popUp && <Notification message={popUp.message} type={popUp.type} />}
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
