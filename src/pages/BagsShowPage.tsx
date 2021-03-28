import { useParams } from 'react-router-dom'

export default function BagsShowPage() {
	const { id } = useParams<{ id: string }>()

	return <h1>Bag Show Page. id: {id}</h1>
}
