import { useEffect } from 'react'

import type { UseMovieSearchProps } from './useMovieSearchEffects.types'

const useMovieSearchEffects = (props: UseMovieSearchProps) => {
    const { triggeredSearch, searchTerm, setSearchValue, refetch, setScrollPosition, scrollPosition, data, addShownMovies } = props

    // When a new search is triggered, manually refetch the data
    useEffect(() => {
        if (triggeredSearch) {
            refetch()
        }
    }, [triggeredSearch, refetch])

    // On scroll, update the scroll position in state (for restoring later)
    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [setScrollPosition])

    // On mount or when scroll position changes, scroll the window back to the saved position
    useEffect(() => {
        if (scrollPosition) {
            window.scrollTo(0, scrollPosition)
        }
    }, [scrollPosition])

    // When new data is fetched (e.g. after search or pagination), add movies to shown list and update the search value in store
    useEffect(() => {
        if (data?.pages) {
            const newMovies = data.pages.flatMap((page) => page.Search).filter((movie) => movie !== undefined)
            addShownMovies(newMovies)
            setSearchValue(searchTerm)
        }
    }, [data, addShownMovies, setSearchValue, searchTerm])
}

export default useMovieSearchEffects
