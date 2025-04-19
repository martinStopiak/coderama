import InfoIcon from '@mui/icons-material/Info'
import LaunchIcon from '@mui/icons-material/Launch'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Typography, Card, CardMedia, CardContent, IconButton, Button, CardActions } from '@mui/material'
import { type FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import type { MovieCardProps } from './MovieCard.types'

import { useFavoritesStore } from '../../store/useFavoritesStore'

const MovieCard: FC<MovieCardProps> = memo((props) => {
    const { poster, title, imdbID, year } = props

    const navigate = useNavigate()
    const { addFavorite, isFavorite, removeFavorite } = useFavoritesStore()

    const handleGoToDetails = (movieId: string) => {
        navigate(`/details/${movieId}`)
    }

    return (
        <Card key={imdbID}>
            <CardMedia component='img' height='400' image={poster} alt={title} sx={{ objectFit: 'cover' }} />
            <CardContent>
                <Typography variant='h6' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {year}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    color='primary'
                    onClick={() => {
                        isFavorite(imdbID) ? removeFavorite(imdbID) : addFavorite(imdbID)
                    }}
                >
                    {isFavorite(imdbID) ? <StarIcon color='primary' /> : <StarBorderIcon />}
                </IconButton>

                <Button size='small' href={`https://www.imdb.com/title/${imdbID}/`} target='_blank' startIcon={<LaunchIcon fontSize='small' />}>
                    IMDb
                </Button>

                <Button size='small' onClick={() => handleGoToDetails(imdbID)} startIcon={<InfoIcon fontSize='small' />}>
                    Details
                </Button>
            </CardActions>
        </Card>
    )
})

export default MovieCard
