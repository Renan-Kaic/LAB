import React from 'react'

import {
	FaHome,
	FaSignInAlt,
	FaUserAlt,
	FaPowerOff,
	FaSuperpowers,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Nav } from './styled'

export default function Header() {
	const botaoClicado = useSelector((state) => state.Reducer.botaoClicado)
	return (
		<Nav>
			<Link href="/user">
				<FaUserAlt size={25} />
			</Link>
			<Link href="/">
				<FaHome size={25} />
			</Link>
			<Link href="/out">
				<FaSignInAlt size={25} />
			</Link>
			<Link href="/buttom">
				{botaoClicado ? (
					<FaPowerOff size={25} />
				) : (
					<FaSuperpowers size={25} />
				)}
			</Link>
		</Nav>
	)
}
