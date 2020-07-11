import React from 'react'
const Board = ({authors, quotes, themes}) => {
	if (!authors || !quotes) return false

	return (
		<section className="board">
			<div className="container ">
				<div className="row outer" style={themes}>
					<div className="col-12 quote">
						<p>&bdquo;{quotes}&rdquo;</p>
					</div>
					<div className="col-12 author">
						<h3>{authors}</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Board
