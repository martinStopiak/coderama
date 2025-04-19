type MovieType = {
    imdbID: string
    Title: string
    Poster: string
    Year: string
}

export type LastSearchStoreType = {
    addShownMovies: (movies: MovieType[]) => void
    shownMovies: MovieType[]
    scrollPosition: number
    setScrollPosition: (position: number) => void
    searchValue: string
    setSearchValue: (term: string) => void
    pageParam: number
    setPageParam: (page: number) => void
}
