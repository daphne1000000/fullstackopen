import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [searchFilter, setSearchFilter] = useState('')
	
	useEffect(() => {
		console.log('effect')
		axios
			.get('http://localhost:3001/persons')
			.then(response => {
				console.log('promise fulfilled)')
				setPersons(response.data)
			})
	}, [])
	console.log('render', persons.length, 'persons')

	const addPerson = (event) => {
		event.preventDefault()
		const personObject = {
			name: newName,
			number: newNumber
		}
	
	const nameExists = persons.some(person => person.name === personObject.name)

	nameExists
		? alert(`${personObject.name} is already added to the phonebook`)
		: setPersons(persons.concat(personObject))

	setNewNumber('')
	setNewName('')
	}

	const handleNameChange = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		console.log(event.target.value)
		setNewNumber(event.target.value)
	}
	
	const handleFilterChange = (event) => {
		console.log(event.target.value)
		setSearchFilter(event.target.value)
	}

	const personsToShow = (searchFilter != '')
		? persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()) === true)
		: persons
	
	return(
		<div>
			<h2>Phonebook</h2>
				<Filter searchFilter={searchFilter} handleFilterChange={handleFilterChange} />
			<h3> Add a New Entry </h3>
				<PersonsForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />	
			<h3>Numbers</h3>
			<Persons persons={personsToShow} />
		</div>
	)
}

export default App
