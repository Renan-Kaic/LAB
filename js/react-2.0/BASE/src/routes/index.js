import React from 'react'
import { Switch } from 'react-router-dom'

import PrimaryRoutes from './primaryRoutes'
import Login from '../pages/login'
import Page404 from '../pages/Page404'

export default function Routes() {
	return (
		<Switch>
			<PrimaryRoutes exact path="/" component={Login} />
			<PrimaryRoutes path="*" component={Page404} />
		</Switch>
	)
}
