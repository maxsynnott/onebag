import React from 'react'
import { useParams } from 'react-router-dom'
import BagEditableShow from '../components/BagEditableShow'
import BagViewableShow from '../components/BagViewableShow'
import useBag from '../hooks/queries/useBag'
import useCurrentUser from '../hooks/queries/useCurrentUser'

export default function BagsShowPage() {
	const { id } = useParams<{ id: string }>()

	const { data: bag } = useBag(id)
	const { data: currentUser } = useCurrentUser({ retry: false })

	if (!bag) return <p>Future 404 page</p>

	return currentUser ? (
		<BagEditableShow bag={bag} />
	) : (
		<BagViewableShow bag={bag} />
	)
}
