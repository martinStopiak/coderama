import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query'

import type { UseMovieSearchQueryProps } from './useMovieSearchQuery.types'

import fetchMovieSearch from '../../../api/fetchMovieSearch'
import type { FetchMovieDetailsMovieSearchType } from '../../../api/fetchMovieSearch.types'
import type { ErrorType } from '../../../pages/Error/Error.types'

const useMovieSearchQuery = ({ triggeredSearch }: UseMovieSearchQueryProps) => {
    return useInfiniteQuery<FetchMovieDetailsMovieSearchType, ErrorType, InfiniteData<FetchMovieDetailsMovieSearchType>, string[], number>({
        enabled: !!triggeredSearch,
        getNextPageParam: (lastPage, allPages) => {
            const total = Number(lastPage.totalResults)
            const loaded = allPages.flatMap((page) => page.Search).length
            return loaded < total ? allPages.length + 1 : undefined
        },
        initialPageParam: 1,
        queryFn: ({ pageParam = 1 }) => fetchMovieSearch({ pageParam, searchTerm: triggeredSearch ?? '' }),
        queryKey: ['movies', triggeredSearch],
    })
}

export default useMovieSearchQuery
