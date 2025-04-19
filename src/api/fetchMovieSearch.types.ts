export type FetchMovieSearchProps = {
    searchTerm: string
    pageParam?: number
}

export type FetchMovieDetailsMovieSearchType = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
    [key: string]: any
}

export const defaultProps: Partial<FetchMovieSearchProps> = {
    pageParam: 1,
}
