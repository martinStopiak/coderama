import { Button, Grid } from '@mui/material'
import type { FC } from 'react'

import type { LoadMoreButtonProps } from './LoadMoreButton.types'

const LoadMoreButton: FC<LoadMoreButtonProps> = (props) => {
    const { isFetchingNextPage, hasNextPage, fetchNextPage } = props

    return hasNextPage ? (
        <Grid container justifyContent='center'>
            <Button sx={{ mb: 6, mt: 4 }} variant='contained' onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                {isFetchingNextPage ? 'Loading...' : 'Load more'}
            </Button>
        </Grid>
    ) : null
}

export default LoadMoreButton
