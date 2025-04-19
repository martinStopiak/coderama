import { css } from '@emotion/react'

import { colors } from './styles/colors'
export const navLinkStyles = css`
    text-decoration: none;

    &.active {
        border-bottom: 2px solid white;
        font-weight: bold;
    }
`

export const rootStyles = css`
    html,
    body {
        margin: 0;
        display: flex;
        min-width: 320px;
        min-height: 100vh;
        width: 100vw;
        max-width: 100%;
    }

    #root {
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        max-width: 100%;
        width: 100%;
    }

    body {
        background-color: var(--background-color, ${colors.colorBackgroundPrimary});
    }
`

export const appBar = css`
    width: 100vw;
    max-width: 100%;
`
