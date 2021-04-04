import { Request } from 'express'
import { isString } from 'util'

export const extractRelations = (req: Request): string[] => {
	const { relations } = req.query

	if (!isString(relations)) return []

	return relations.split(',')
}
