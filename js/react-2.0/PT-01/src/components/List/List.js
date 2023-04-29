import PropTypes from 'prop-types'

function Item({ Marca, Modelo, AnaLancamento }) {
	return (
		<>
			<h1>{Marca}</h1>
			<h2>{Modelo}</h2>
			<h3>{AnaLancamento}</h3>
		</>
	)
}

Item.propTypes = {
	Marca: PropTypes.string.isRequired,
	Modelo: PropTypes.string.isRequired,
	AnaLancamento: PropTypes.number.isRequired,
}
