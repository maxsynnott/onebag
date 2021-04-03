import React from 'react'
import { Container } from '@material-ui/core'
import BagGrid from '../components/BagGrid'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import useUserBags from '../hooks/queries/useUserBags'

export default function MyBagsPage() {
	const { data: currentUser } = useCurrentUser()
	const { data: bags } = useUserBags(currentUser?.id)

	if (!bags) return null
	return (
		<Container>
			<BagGrid bags={bags} />
		</Container>
	)
}
