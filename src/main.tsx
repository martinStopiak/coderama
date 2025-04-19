import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.js'

const rootElement = document.getElementById('root')
const queryClient = new QueryClient()

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </QueryClientProvider>
        </StrictMode>
    )
} else {
    console.error('Element with id "root" not found')
}
