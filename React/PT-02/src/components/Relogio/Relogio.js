import React from 'react'

export default function Relogio() {
	return (
		<div>
			<h1>Relogio</h1>
			<h1> {new Date().toLocaleTimeString()} </h1>
		</div>
	)
}
