import { Box, Button, TextField } from '@mui/material'
import type { FC } from 'react'

import type { SearchInputProps } from './SearchInput.types'

const SearchInput: FC<SearchInputProps> = ({ searchTerm, setSearchTerm, handleSearchClick }) => {
    return (
        <Box display='flex' gap={2} mb={4}>
            <TextField
                label='Search'
                variant='outlined'
                fullWidth
                color='secondary'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearchClick()
                    }
                }}
            />
            <Button variant='contained' onClick={handleSearchClick}>
                Search
            </Button>
        </Box>
    )
}

export default SearchInput
