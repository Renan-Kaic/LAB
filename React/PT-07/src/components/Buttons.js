/* eslint-disable react/prop-types */
import React from 'react'

export default function Buttons({ linkPagina, pagina }) {
	if (pagina === 0) {
		return (
			<div>
				<button type="button" onClick={() => linkPagina(1)}>
					Pagina 1
				</button>
				<button type="button" onClick={() => linkPagina(2)}>
					Pagina 2
				</button>
			</div>
		)
	}

	if (pagina === 1) {
		return (
			<div>
				<div>
					<button type="button" onClick={() => linkPagina(0)}>
						Home
					</button>
				</div>

				<div>
					<button type="button" onClick={() => linkPagina(2)}>
						Pagina 2
					</button>
				</div>
			</div>
		)
	}

	if (pagina === 2) {
		return (
			<div>
				<div>
					<button type="button" onClick={() => linkPagina(0)}>
						Home
					</button>
				</div>

				<div>
					<button type="button" onClick={() => linkPagina(1)}>
						Pagina 1
					</button>
				</div>
			</div>
		)
	}
}
