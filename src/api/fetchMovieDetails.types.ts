export type FetchMovieDetailsProps = { searchId: string }

export type FetchMovieDetailsMovieDetailsType = {
    Ratings: FetchMovieDetailsMovieRatingType
} & {
    [key: string]: string
}

export type FetchMovieDetailsMovieRatingType = {
    Source: string
    Value: string
}[]
