import type { FetchMovieDetailsMovieDetailsType, FetchMovieDetailsProps } from './fetchMovieDetails.types'

import type { ErrorType } from '../pages/Error/Error.types'

const fetchMovieDetails = async (props: FetchMovieDetailsProps): Promise<FetchMovieDetailsMovieDetailsType> => {
    const { searchId } = props

    const apiUrl = import.meta.env.VITE_API_DETAIL_FULL
    const response = await fetch(`${apiUrl}${searchId}`)

    if (!response.ok) {
        const error: ErrorType = {
            message: `Network error for movie ID "${searchId}"`,
            status: response.status,
            statusText: response.statusText,
        }

        throw error
    }

    return response.json()
}

export default fetchMovieDetails
