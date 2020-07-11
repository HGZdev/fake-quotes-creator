import React, {Component} from 'react'

import {quotesDB} from '../assets/data/quotesDB.js'
import {themesDB} from '../assets/data/themesDB.js'
import ControlBar from './Components/ControlBar.jsx'
import Board from './Components/Board.jsx'

class FakeQuotesCreator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			valuesDB: quotesDB,
			themesDB,
			categoriesDB: '',
			valuesArray: {},
			valuesSelected: {},
			valuesDisplay: {},
		}
	}

	componentWillMount() {
		const valuesDB = this.state.valuesDB
		let newState = {
			categoriesDB: {},
			valuesArray: {},
		}

		// Set valuesArray
		newState = this.mapValues()

		// Set categoriesDB
		newState.categoriesDB = this.valuesToArray(
			valuesDB,
			'c',
			'Wybierz kategorię...'
		)

		this.setState(newState)
	}

	mapValues = filterBy => {
		// Set valuesArray and reset valuesSelected and valuesDisplay
		const valuesDB = this.state.valuesDB
		const newState = {
			valuesArray: {
				categories: this.valuesToArray(valuesDB, 'c', 'Wybierz kategorię...'),
				quotes: this.valuesToArray(valuesDB, 'q', 'Wybierz cytat...', filterBy),
				authors: this.valuesToArray(valuesDB, 'a', 'Wybierz autora...'),
				themes: this.state.themesDB,
			},
			valuesSelected: {
				categories: 0,
				quotes: 0,
				authors: 0,
				themes: 0,
			},
			valuesDisplay: {
				quotes: null,
				authors: null,
				themes: {
					name: 'Wybierz szablon...',
					color: '#242424',
					backgroundColor: '#FFFFFF',
				},
			},
		}

		return newState
	}

	valuesToArray = (database, element, text, filterBy) => {
		const categoriesDB = this.state.categoriesDB

		// Prepare raw array (filter by category if selected)
		// eslint-disable-next-line array-callback-return
		let array = database.map(e => {
			if (filterBy && filterBy !== 0) {
				if (categoriesDB[filterBy] === e.c) {
					return e[element].trim()
				}
			} else {
				return e[element].trim()
			}
		})

		// Sort array, remove duplicates, undefined values and add initial selected option
		array = array.sort().filter((x, i, a) => !i || x !== a[i - 1])
		array = array.filter(n => n)
		if (text) {
			array.unshift(text)
		}
		return array
	}

	handleSelectChange = event => {
		const value = event.target.value
		const className = event.target.className
		const classNamesArray = ['categories', 'quotes', 'authors', 'themes']
		let newState = {
			valuesArray: this.state.valuesArray,
			valuesSelected: {},
			valuesDisplay: {},
		}

		// Filter quotes by category (if it was changed => update mapValues)
		if (className === 'categories' && value !== 0) {
			newState = this.mapValues(value)
		}

		// Set values to select and display
		for (let i = 0; i < classNamesArray.length; i++) {
			if (classNamesArray[i] === className) {
				newState.valuesSelected[classNamesArray[i]] = value
				newState.valuesDisplay[classNamesArray[i]] = this.state.valuesArray[
					className
				][value]
			} else {
				newState.valuesSelected[classNamesArray[i]] = this.state.valuesSelected[
					classNamesArray[i]
				]
				newState.valuesDisplay[classNamesArray[i]] = this.state.valuesDisplay[
					classNamesArray[i]
				]
			}
		}

		// If category was changed => reset selected quote
		if (className === 'categories') {
			newState.valuesSelected.quotes = 0
		}

		this.setState(newState)
	}

	handleRandomClick = () => {
		const classNamesArray = ['quotes', 'authors', 'themes']

		// Reset valuesArray, selection and display board
		const newState = this.mapValues()

		// Random values generator + set values to select and display
		for (let i = 0; i < classNamesArray.length; i++) {
			const tempValuesArray = newState.valuesArray[classNamesArray[i]]
			const random = Math.floor(
				Math.random() * (tempValuesArray.length - 1) + 1
			)
			newState.valuesSelected[classNamesArray[i]] = random
			newState.valuesDisplay[classNamesArray[i]] = tempValuesArray[random]
		}
		this.setState(newState)
	}

	handleSubmit = event => {
		event.preventDefault()
	}

	render() {
		const {
			valuesArray,
			themesArray,
			valuesSelected,
			handleSubmit,
			valuesDisplay,
		} = this.state

		const {authors, quotes, themes} = valuesDisplay

		return (
			<section className="creator">
				<div className="container ">
					<ControlBar
						{...{
							className: 'col-12 row inner',
							valuesArray,
							themesArray,
							valuesSelected,
							onSubmit: handleSubmit,
							onChange: this.handleSelectChange,
							onClick: this.handleRandomClick,
						}}
					/>
					<Board {...{authors, quotes, themes}} />
				</div>
			</section>
		)
	}
}

export default FakeQuotesCreator
