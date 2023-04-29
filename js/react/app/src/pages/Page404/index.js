import React from 'react'

import { Container, ErrorMessage, Message } from './styled'

export default function Page404() {
	return (
		<Container>
			<ErrorMessage>404</ErrorMessage>
			<Message>Page not found</Message>
		</Container>
	)
}
