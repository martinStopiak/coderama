import { Typography, Box } from '@mui/material'
import type { FC } from 'react'
import { useLocation } from 'react-router-dom'

import * as styles from './Error.styles'
const ErrorPage: FC = () => {
    const location = useLocation()
    const { message, status, statusText } = location.state || {}

    return (
        <Box component='div' css={styles.errorStyles}>
            <Typography variant='h4' align='center' color='warning' gutterBottom>
                Oops! Something went wrong.
            </Typography>
            <Typography variant='body1' color='textPrimary' align='center' gutterBottom>
                {status || 'Unknown'} {statusText || 'Unknown'}
            </Typography>
            <Typography variant='body2' align='center' color='textSecondary'>
                {message || 'We encountered an error.'}
            </Typography>
        </Box>
    )
}

export default ErrorPage
