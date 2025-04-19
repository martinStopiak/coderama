import { Grid } from '@mui/material'
import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import fetchMovieDetails from '../../api/fetchMovieDetails'
import type { FetchMovieDetailsMovieDetailsType } from '../../api/fetchMovieDetails.types'
import Loading from '../../components/Loading/Loading'
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useFavoritesStore } from '../../store/useFavoritesStore'

const PAGE_SIZE = 6

const FavoritePage: FC = () => {
    const navigate = useNavigate()
    const { favorites } = useFavoritesStore()

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery<
        FetchMovieDetailsMovieDetailsType[],
        Error,
        InfiniteData<FetchMovieDetailsMovieDetailsType[]>,
        string[],
        number
    >({
        enabled: favorites.length > 0,
        getNextPageParam: (_lastPage, allPages) => {
            const nextIndex = allPages.length * PAGE_SIZE
            return nextIndex < favorites.length ? nextIndex : undefined
        },
        initialPageParam: 0,
        queryFn: async ({ pageParam = 0 }) => {
            const idsToFetch = favorites.slice(pageParam, pageParam + PAGE_SIZE)

            const results = await Promise.all(
                idsToFetch.map((id) =>
                    fetchMovieDetails({ searchId: id }).catch((err) => {
                        throw {
                            message: err.message,
                            status: err.status || 'Unknown status',
                            statusText: err.statusText || 'Unknown status text',
                        }
                    })
                )
            )

            return results
        },
        queryKey: ['favorites'],
    })

    if (isError) {
        navigate('/error', {
            state: {
                message: (error as any).message,
                status: (error as any).status,
                statusText: (error as any).statusText,
            },
        })

        return null
    }

    if (isLoading) return <Loading />

    return (
        <>
            <Grid sx={{ pb: 4 }} container spacing={2} component='div'>
                {data?.pages
                    .flat()
                    .filter((movie) => favorites.includes(movie.imdbID))
                    .map((movie) => <MovieCard key={movie.imdbID} poster={movie.Poster} title={movie.Title} imdbID={movie.imdbID} year={movie.Year} />)}
            </Grid>

            <LoadMoreButton hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage} />
        </>
    )
}

export default FavoritePage
