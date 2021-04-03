import { IconButton, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import React from 'react'
import { useQueryClient } from 'react-query'
import useFavoriteBag from '../hooks/mutations/useFavoriteBag'
import useUnfavoriteBag from '../hooks/mutations/useUnfavoriteBag'
import { Bag } from '../types'

interface FavoriteButtonProps {
	bag: Bag
}

export default function BagFavoriteButton({ bag }: FavoriteButtonProps) {
	const queryClient = useQueryClient()

	const { mutate: favoriteBag } = useFavoriteBag(bag.id, {
		onSuccess: () => {
			queryClient.invalidateQueries('bags')
		},
	})
	const { mutate: unfavoriteBag } = useUnfavoriteBag(bag.id, {
		onSuccess: () => {
			queryClient.invalidateQueries('bags')
		},
	})

	const handleToggleFavorite = () =>
		bag.favorited ? unfavoriteBag() : favoriteBag()

	return (
		<IconButton onClick={handleToggleFavorite}>
			{bag.favoriteCount > 0 && (
				<Typography variant="caption">{bag.favoriteCount}</Typography>
			)}
			{bag.favorited ? (
				<FavoriteIcon color="secondary" />
			) : (
				<FavoriteBorderIcon color="secondary" />
			)}
		</IconButton>
	)
}
