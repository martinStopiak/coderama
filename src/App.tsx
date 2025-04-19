import 'normalize.css'

import { Global } from '@emotion/react'
import { AppBar, Button, Container, Toolbar } from '@mui/material'
import type { FC } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'

import * as styles from './App.styles'

import DetailsPage from './pages/Details/Details'
import ErrorPage from './pages/Error/Error'
import FavoritePage from './pages/Favorite/Favorite'
import HomePage from './pages/Home/Home'

const App: FC = () => {
    return (
        <>
            <Global styles={styles.rootStyles} />

            <Router>
                <AppBar css={styles.appBar} position='static'>
                    <Toolbar sx={{ gap: 2 }}>
                        <Button color='inherit' component={NavLink} to='/' sx={styles.navLinkStyles}>
                            Home
                        </Button>
                        <Button color='inherit' component={NavLink} to='/favorite' sx={styles.navLinkStyles}>
                            Favorites
                        </Button>
                    </Toolbar>
                </AppBar>

                <Container sx={{ '@media (min-width: 1200px)': { maxWidth: '90%' }, '@media (min-width: 600px)': { maxWidth: '90%' }, 'mt': 4 }}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/favorite' element={<FavoritePage />} />
                        <Route path='/details' element={<DetailsPage />} />
                        <Route path='/details/:id' element={<DetailsPage />} />
                        <Route path='/error' element={<ErrorPage />} />
                    </Routes>
                </Container>
            </Router>
        </>
    )
}

export default App
