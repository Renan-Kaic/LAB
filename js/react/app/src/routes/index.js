import React from 'react'
import { Switch } from 'react-router-dom'

import PrimaryRoutes from './primaryRoutes'

import Login from '../pages/login'
import Page404 from '../pages/Page404'
import Aluno from '../pages/aluno'
import AlunoIndex from '../pages/alunos-index'
import Registro from '../pages/registro'
import Fotos from '../pages/fotos'

export default function Routes() {
	return (
		<Switch>
			<PrimaryRoutes exact path="/" component={AlunoIndex} isClosed />

			<PrimaryRoutes
				exact
				path="/aluno/:id/edit/"
				component={Aluno}
				isClosed
			/>

			<PrimaryRoutes exact path="/aluno/" component={Aluno} isClosed />
			<PrimaryRoutes exact path="/foto/:id" component={Fotos} isClosed />
			<PrimaryRoutes exact path="/registro/" component={Registro} />
			<PrimaryRoutes exact path="/login/" component={Login} />
			<PrimaryRoutes exact path="/alunos/:id/edit" component={Login} />
			<PrimaryRoutes path="*" component={Page404} />
		</Switch>
	)
}
