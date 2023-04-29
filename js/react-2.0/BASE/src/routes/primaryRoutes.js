import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function PrimaryRoutes({
	component: Component,
	isClosed,
	...rest
}) {
	const isLoggedID = false

	if (isClosed && !isLoggedID) {
		return (
			<Redirect
				to={{
					pathname: '/login',
					state: { prevPath: rest.location.pathname },
				}}
			/>
		)
	}

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Route {...rest} component={Component} />
}

PrimaryRoutes.defaultProps = {
	isClosed: false,
}

PrimaryRoutes.propTypes = {
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
	isClosed: PropTypes.bool,
}
