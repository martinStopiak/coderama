import { ArrowBack } from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography, Alert } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { isString } from 'lodash'
import type { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import * as styles from './Details.styles'

import fetchMovieDetails from '../../api/fetchMovieDetails'
import type { FetchMovieDetailsMovieDetailsType } from '../../api/fetchMovieDetails.types'
import Loading from '../../components/Loading/Loading'
import type { ErrorType } from '../../pages/Error/Error.types'
import { useFavoritesStore } from '../../store/useFavoritesStore'

const DetailsPage: FC = () => {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <Alert severity='error'>Missing movie ID.</Alert>
    }

    const { addFavorite, isFavorite, removeFavorite } = useFavoritesStore()
    const navigate = useNavigate()

    const { data, isLoading, isError, error } = useQuery<FetchMovieDetailsMovieDetailsType, ErrorType>({
        enabled: !!id,
        queryFn: () => fetchMovieDetails({ searchId: id }),
        queryKey: ['movie', id],
    })

    if (isError) {
        navigate('/error', { state: error })

        return null
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <Box p={4}>
            <Link to='/'>
                <Button variant='text' css={styles.backButton} startIcon={<ArrowBack />} sx={{ marginBottom: 2 }}>
                    Návrat na domovskú stránku
                </Button>
            </Link>

            {data && data?.Response === 'False' && (
                <Box alignItems='center'>
                    <Typography variant='h4'>{data.Error}</Typography>
                </Box>
            )}

            {data && data.Response !== 'False' && (
                <Grid container spacing={2}>
                    <Grid size={{ sm: 4, xs: 12 }}>
                        <Card>
                            <CardMedia component='img' image={data.Poster} alt={data.Title} />
                        </Card>
                    </Grid>

                    <Grid size={{ sm: 8, xs: 12 }}>
                        <Card>
                            <CardContent>
                                <Typography variant='h4'>
                                    {data.Title} ({data.Year})
                                    {data.imdbID && (
                                        <IconButton
                                            color='primary'
                                            onClick={() => {
                                                isFavorite(data.imdbID) ? removeFavorite(data.imdbID) : addFavorite(data.imdbID)
                                            }}
                                        >
                                            {isFavorite(data.imdbID) ? <StarIcon color='primary' /> : <StarBorderIcon />}
                                        </IconButton>
                                    )}
                                </Typography>

                                <Typography variant='subtitle1' color='textSecondary'>
                                    Released: {data.Released}
                                </Typography>

                                <Typography variant='body1' sx={{ marginTop: 2 }}>
                                    {data.Plot}
                                </Typography>

                                <Box sx={{ marginTop: 3 }}>
                                    {Object.entries(data).map(([key, value], index) => {
                                        if (['Title', 'Year', 'Released', 'Plot', 'Response', 'Poster'].includes(key)) return null

                                        if (Array.isArray(value)) {
                                            return (
                                                <Typography variant='body2' key={`${key}_${index}`}>
                                                    <strong>Ratings:</strong>{' '}
                                                    {Array.isArray(value) && value.map((rating) => `${rating.Source}: ${rating.Value}`).join(', ')}
                                                </Typography>
                                            )
                                        }
                                        return (
                                            isString(value) &&
                                            value !== 'N/A' && (
                                                <Typography variant='body2' key={key}>
                                                    <strong>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}:</strong> {value}
                                                </Typography>
                                            )
                                        )
                                    })}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </Box>
    )
}

export default DetailsPage
