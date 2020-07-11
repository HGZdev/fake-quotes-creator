import React from 'react'
import './styles/index.scss'
import FakeQuotesCreator from './FakeQuotesCreator.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
	return (
		<div className="main-container">
			<Header />
			<FakeQuotesCreator />
			<Footer />
		</div>
	)
}

export default App
