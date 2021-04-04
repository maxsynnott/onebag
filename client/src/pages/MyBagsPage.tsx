import { Container } from '@material-ui/core'
import React from 'react'
import BagsGrid from '../components/BagsGrid'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import { User, WithBags } from '../types'

export default function MyBagsPage() {
	const { data: currentUser } = useCurrentUser<User & WithBags>({
		queryParams: { relations: ['bags'] },
	})

	if (!currentUser) return null

	const bags = currentUser.bags.map((bag) => ({ ...bag, user: currentUser }))

	return (
		<Container>
			<BagsGrid bags={bags} />
		</Container>
	)
}
