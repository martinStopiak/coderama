import { Container, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton'
import MovieCard from '../../components/MovieCard/MovieCard'
import SearchInput from '../../components/SearchInput/SearchInput'
import useLastSearch from '../../store/useLastSearch'

import useMovieSearchEffects from './hooks/useMovieSearchEffects'
import useMovieSearchQuery from './hooks/useMovieSearchQuery'

const HomePage = () => {
    const navigate = useNavigate()
    const { shownMovies, scrollPosition, setScrollPosition, addShownMovies, setSearchValue, searchValue } = useLastSearch()

    const [searchTerm, setSearchTerm] = useState(searchValue)
    const [triggeredSearch, setTriggeredSearch] = useState<string>(searchValue)

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, isError, error, refetch } = useMovieSearchQuery({
        triggeredSearch,
    })

    useMovieSearchEffects({
        addShownMovies,
        data,
        refetch,
        scrollPosition,
        searchTerm,
        setScrollPosition,
        setSearchValue,
        triggeredSearch,
    })

    if (isError) {
        navigate('/error', { state: error })
        return null
    }

    const shouldShowLoadMore = shownMovies.length > 0 && (!data || (data && hasNextPage))
    const movieNotFound = data?.pages[0]?.Response === 'False' && data?.pages[0]?.Error === 'Movie not found!'

    const handleSearchClick = () => {
        if (searchTerm.trim() === '') return
        setTriggeredSearch(searchTerm.trim())
    }

    return (
        <>
            <Container maxWidth='md' sx={{ mt: 4 }}>
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearchClick={handleSearchClick} />
            </Container>

            {isFetching && !isFetchingNextPage && <Loading />}

            {movieNotFound && (
                <Typography variant='h6' sx={{ mt: 2, textAlign: 'center' }}>
                    No movies found for "{searchTerm}".
                </Typography>
            )}

            {!movieNotFound && shownMovies?.length > 0 && (
                <Grid container spacing={2}>
                    {shownMovies.map((movie, index) => (
                        <MovieCard key={`${movie.imdbID}-${index}`} poster={movie.Poster} title={movie.Title} imdbID={movie.imdbID} year={movie.Year} />
                    ))}
                </Grid>
            )}

            {shouldShowLoadMore && <LoadMoreButton hasNextPage={true} fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage} />}
        </>
    )
}

export default HomePage
