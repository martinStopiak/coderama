import { css, keyframes } from '@emotion/react'

import { colors } from '../../styles/colors'

const spin = keyframes`
  0%, 100% {
    box-shadow: 0.4em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: 0.4em 0.4em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 0.4em 0 0px currentcolor;
  }
  37% {
    box-shadow: -0.4em 0.4em 0 0 currentcolor;
  }
  50% {
    box-shadow: -0.4em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -0.4em -0.4em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -0.4em 0 0 currentcolor;
  }
  87% {
    box-shadow: 0.4em -0.4em 0 0 currentcolor;
  }
`

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`

export const loaderWrapper = css`
    opacity: 0;
    animation: ${fadeIn} 250ms ease-in forwards;
    justify-items: center;
    align-content: center;
    height: 100%;
    width: 100%;
    display: grid;
    color: ${colors.colorTextSecondary};
`

export const loaderText = css`
    color: ${colors.colorTextTertiary};
`

export const loader = css`
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    color: ${colors.colorTextPrimary};
    justify-self: center;
    position: relative;

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
    }

    &::after {
        color: ${colors.colorBackgroundSecondary};
        transform: rotateY(70deg) rotateZ(180deg);
    }

    &::before {
        transform: rotateX(70deg);
    }
`
