import { type FetchMovieDetailsMovieSearchType, type FetchMovieSearchProps, defaultProps } from './fetchMovieSearch.types'

import type { ErrorType } from '../pages/Error/Error.types'

const fetchMovieSearch = async (props: FetchMovieSearchProps): Promise<FetchMovieDetailsMovieSearchType> => {
    const { searchTerm, pageParam } = { ...defaultProps, ...props }

    const apiUrl = import.meta.env.VITE_API_SEARCH_FULL
    const response = await fetch(`${apiUrl}${searchTerm}&page=${pageParam}`)

    if (!response.ok) {
        const error: ErrorType = {
            message: `Network error for search movies (search term): "${searchTerm}"`,
            status: response.status,
            statusText: response.statusText,
        }

        throw error
    }

    return response.json()
}

export default fetchMovieSearch
