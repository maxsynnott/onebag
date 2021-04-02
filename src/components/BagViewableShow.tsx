import { Bag } from '../types'

interface BagViewableShowProps {
	bag: Bag
}

export default function BagViewableShow({ bag }: BagViewableShowProps) {
	return <p>Viewable: {JSON.stringify(bag)}</p>
}
