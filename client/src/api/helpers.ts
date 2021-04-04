import { QueryParamsObject } from '../types'

export const buildEndpoint = (
	path: string,
	pathParams?: Record<string, string>,
	queryParams?: QueryParamsObject,
): string => {
	let endpoint = path

	if (pathParams) endpoint = replacePathParams(endpoint, pathParams)
	if (queryParams) endpoint = appendQueryParams(endpoint, queryParams)

	return endpoint
}

const replacePathParams = (
	path: string,
	pathParams: Record<string, string>,
) => {
	const pattern = /:(\w+)/g
	return path.replace(pattern, (_, key) => pathParams[key])
}

const appendQueryParams = (
	endpoint: string,
	queryParams: QueryParamsObject,
): string => {
	const queryParamEntries = queryParamsToEntries(queryParams)
	const searchParams = new URLSearchParams(queryParamEntries)
	return endpoint + '?' + searchParams.toString()
}

const queryParamsToEntries = (queryParams: QueryParamsObject): string[][] => {
	return Object.entries(queryParams).map(([key, value]) => [
		key,
		Array.isArray(value) ? value.join(',') : value,
	])
}
