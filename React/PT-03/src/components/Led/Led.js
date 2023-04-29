import React from 'react'

import './Led.css'

export default function Led(props) {
	// eslint-disable-next-line react/prop-types
	const { on, setOn } = props

	return (
		<div className="container">
			<div className={on ? 'verde' : 'vermelho'} />
			<button
				type="button"
				onClick={() => {
					setOn(!on)
				}}
				className="btn">
				{' '}
				{on ? 'LIGAR' : 'DESLIGAR'}{' '}
			</button>
		</div>
	)
}
