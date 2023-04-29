/* eslint-disable react/prop-types */
import React from 'react'

export default function Caixa(props) {
	const { children } = props
	return (
		<div>
			Hello world
			{children}
		</div>
	)
}
