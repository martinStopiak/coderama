export type UseMovieSearchProps = {
    triggeredSearch: string
    searchTerm: string
    setSearchValue: (term: string) => void
    refetch: () => void
    setScrollPosition: (position: number) => void
    scrollPosition: number
    data?: any
    addShownMovies: (movies: any[]) => void
}
