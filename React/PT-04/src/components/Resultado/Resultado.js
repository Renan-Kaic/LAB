/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react'

export default function Resultado(props) {
	const { soma } = props

	return (
		<div>
			<p
				style={{
					color: '#fff',
				}}>
				Soma: {`${soma}`}
			</p>

			<p style={{ color: '#fff' }}>
				Resultado:{' '}
				{soma / 3 >= 7
					? 'Aprovado'
					: soma >= 5
					? 'Recuperação'
					: 'reprovado'}{' '}
			</p>
		</div>
	)
}
