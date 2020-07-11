import React from 'react'

const Select = ({className, label, valuesArray, valuesSelected, onChange}) => {
	const optionsMap = valuesArray[className].map((el, i) => {
		return (
			<option key={i} value={i}>
				{el.name || el}
			</option>
		)
	})
	return (
		<div className="col-2">
			<span>{label}</span>
			<select
				{...{
					className,
					name: className,
					value: valuesSelected[className],
					onChange,
				}}
			>
				{optionsMap}
			</select>
		</div>
	)
}

const RandomBtn = ({className, onClick}) => {
	return (
		<div className="col-2">
			<span>&nbsp;</span>
			<button
				type="button"
				name={className}
				className={className}
				onClick={onClick}
			>
				LOSUJ
			</button>
		</div>
	)
}

const ControlBar = ({
	valuesArray,
	valuesSelected,
	onChange,
	onSubmit,
	onClick,
}) => {
	const labelsArray = ['Kategoria:', 'Cytaty:', 'Autorzy:', 'Szablony:']
	const classNamesArray = ['categories', 'quotes', 'authors', 'themes']
	const selectionMap = classNamesArray.map((el, i) => {
		return (
			<Select
				key={el}
				{...{
					label: labelsArray[i],
					className: el,
					valuesArray,
					valuesSelected,
					onChange,
				}}
			/>
		)
	})
	return (
		<section className="controlbar">
			<div className="container row outer">
				<form
					className="col-12 row inner"
					action="index.html"
					method="post"
					onSubmit={onSubmit}
				>
					{selectionMap}
					<RandomBtn className="random-button" onClick={onClick} />
				</form>
			</div>
		</section>
	)
}

export default ControlBar
